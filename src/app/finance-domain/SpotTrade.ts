import {CurrencyPair} from './CurrencyPair';
import {Side} from './Side';
import {TradeStatus} from "./TradeStatus";

export class SpotTrade {
  currencyPair: CurrencyPair;
  rate: number;
  side: Side;
  quantity: number;
  tradeDate: Date;
  settlementDate: Date;
  account: string;
  status: TradeStatus;
}
