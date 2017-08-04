import {Position} from './Position';
import {Currency, USD} from './Currency';
import {Injectable} from '@angular/core';
import {Quote} from './Quote';
import {SpotTrade} from './SpotTrade';
import {NextObserver} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TradeManager} from './TradeManager';
import {BUY, SELL} from './Side';
import {CurrencyPair} from './CurrencyPair';
import {ForgeMarketManager} from './ForgeMarketManager';

@Injectable()
export class PositionManager {
  private positions: Position[];
  private pnl: number;
  private latestQuotes: Quote[];

  private positionChange: BehaviorSubject<Position[]> = new BehaviorSubject<Position[]>([]);
  private pnlChange: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private marketManager: ForgeMarketManager, tradeManager: TradeManager) {
    this.positions = [];
    this.pnl = 0;
    this.latestQuotes = [];

    tradeManager.asTradeObservable().subscribe(new PositionKeeper(this));
    marketManager.asMarketObservable().subscribe(new PnlKeeper(this));
  }

  public getPositions(): Position[] {
    return this.positions;
  }

  public getPnl(): number {
    return this.pnl;
  }

  public asPositionObservable(): Observable<Position[]> {
    return this.positionChange.asObservable();
  }

  public asPnlObservable(): Observable<number> {
    return this.pnlChange.asObservable();
  }

  processTrades(trades: SpotTrade[]): void {
    this.positions = [];
    this.pnl = 0;

    let i;
    for (i = 0; i < trades.length; i += 1) {
      this.processTrade(trades[i]);
    }

    this.triggerPositionChanged();
    this.triggerPnlChanged();
  }

  private processTrade(t: SpotTrade): void {
    const baseCurrency: Currency = t.currencyPair.getBaseCurrency();
    const counterCurrency: Currency = t.currencyPair.getCounterCurrency();

    let baseAmount;
    let counterAmount;

    switch (t.side) {
      case BUY: {
        baseAmount = t.quantity;
        counterAmount = -t.rate * baseAmount;
        break;
      }

      case SELL: {
        baseAmount = -t.quantity;
        counterAmount = t.rate * baseAmount;
        break;
      }

      default: {
        console.error('Unknown side: ' + t.side);
        return;
      }
    }

    this.adjust(t.account, baseCurrency, baseAmount);
    this.adjust(t.account, counterCurrency, counterAmount);

  }

  private adjust(account: string, currency: Currency, amount: number): void {
    const pos: Position = this.get(account, currency);
    pos.quantity += amount;
    this.pnl += this.computePnl(currency, amount);
  }

  private get(account: string, currency: Currency): Position {
    let i;
    let pos: Position;
    for (i = 0; i < this.positions.length; i += 1) {
      pos = this.positions[i];

      if (pos.currency === currency && pos.account === account) {
        return pos;
      }
    }

    // not found
    pos = {
      currency: currency,
      account: account,
      quantity: 0
    };

    this.positions.push(pos);
    return pos;
  }

  processMarketData(quotes: Quote[]): void {
    this.latestQuotes = quotes;

    // update pnl
    this.pnl = 0;
    let i;
    let pos;
    for (i = 0; i < this.positions.length; i += 1) {
      pos = this.positions[i];
      this.pnl += this.computePnl(pos.currency, pos.quantity);
    }

    this.triggerPnlChanged();
  }

  private computePnl(currency: Currency, amount: number): number {
    if (currency === USD) {
      return amount;
    }

    let i: number;
    let q: Quote;
    for (i = 0; i < this.latestQuotes.length; i += 1) {
      q = this.latestQuotes[i];

      const cp: CurrencyPair = q.currencyPair;
      if (cp.getBaseCurrency() === USD) {
        return amount / q.bid;
      } else if (cp.getCounterCurrency() === USD) {
        return amount * q.ask;
      }
    }
    console.error('Cannot convert ' + currency.toString() + ' to USD');
    return 0; // todo
  }

  private triggerPositionChanged(): void {
    this.positionChange.next(this.positions);
  }

  private triggerPnlChanged(): void {
    this.pnlChange.next(this.pnl);
  }
}

class PositionKeeper implements NextObserver<SpotTrade[]> {
  next: (value: SpotTrade[]) => void;

  constructor(positionManager: PositionManager) {
    this.next = function (value: SpotTrade[]) {
      positionManager.processTrades(value);
    };
  }
}

class PnlKeeper implements NextObserver<Quote[]> {
  next: (value: Quote[]) => void;

  constructor(positionManager: PositionManager) {
    this.next = function (value: Quote[]) {
      positionManager.processMarketData(value);
    };
  }
}
