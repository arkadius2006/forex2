import {Exchange} from './Exchange';
import {Order} from './Order';
import {Observable} from 'rxjs/Observable';
import {SpotTrade} from './SpotTrade';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CAPTURED} from './TradeStatus';
import {Quote} from './Quote';
import {BUY, SELL} from './Side';
import {Injectable} from '@angular/core';
import {ForgeMarketManager} from './ForgeMarketManager';

@Injectable()
export class MockExchange implements Exchange {
  private tradeChange: BehaviorSubject<SpotTrade> = new BehaviorSubject<SpotTrade>(null);

  constructor(private marketManager: ForgeMarketManager) {

  }

  public submit(order: Order): void {
    const trade: SpotTrade = this.execute(order);
    if (trade) {
      this.tradeChange.next(trade);
    } else {
      console.log('Exchange cannot execute order ' + JSON.stringify(order));
    }
  }

  public asTradeObservable(): Observable<SpotTrade> {
    return this.tradeChange.asObservable();
  }

  private execute(order: Order): SpotTrade {
    console.log(JSON.stringify(order));

    const quote: Quote = this.marketManager.getQuote(order.currencyPair);

    let rate: number;
    if (quote) {
      switch (order.side) {
        case BUY: {
          rate = quote.bid;
          break;
        }

        case SELL: {
          rate = quote.ask;
          break;
        }

        default: {
          console.error('Unknown side: ' + order.side);
          return null;
        }
      }

      return {
        currencyPair: order.currencyPair,
        quantity: order.quantity,
        side: order.side,
        account: order.account,
        tradeDate: new Date(),
        settlementDate: new Date(), // todo use business calendar
        status: CAPTURED,
        rate
      };
    }

    return null;
  }
}
