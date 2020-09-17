import {JsonObject, JsonProperty} from 'json2typescript';
import Decimal from 'decimal.js';
import {DecimalNumberJsonConverter} from '../converter/primitives/decimal.number.json.converter';
import {DecimalNumber} from '../primitives/decimal.number';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import {PriceValue} from '../price_common/price.value';
import {PrimitiveUtils} from '../util/primitive.utils';
import {PriceCommonUtils} from '../util/price.common.utils';
import {TradeID} from '../trade/trade.id';
import {TradeIdArrayJsonConverter} from '../converter/trade/trade.id.array.json.converter';
import {AccountUnits} from '../primitives/account.units';
import {AccountUnitsJsonConverter} from '../converter/primitives/account.units.json.converter';

@JsonObject('Position')
export class PositionSide {
  @JsonProperty('units', DecimalNumberJsonConverter, true)
  private units: DecimalNumber = new DecimalNumber('');
  @JsonProperty('averagePrice', PriceValueJsonConverter, true)
  private averagePrice: PriceValue = new PriceValue('');
  @JsonProperty('tradeIDs', TradeIdArrayJsonConverter, true)
  private tradeIDs: TradeID[] = new Array<TradeID>();
  @JsonProperty('pl', AccountUnitsJsonConverter, true)
  private pl: AccountUnits = new AccountUnits('');
  @JsonProperty('unrealizedPL', AccountUnitsJsonConverter, true)
  private unrealizedPL: AccountUnits = new AccountUnits('');
  @JsonProperty('resettablePL', AccountUnitsJsonConverter, true)
  private resettablePL: AccountUnits = new AccountUnits('');
  @JsonProperty('financing', AccountUnitsJsonConverter, true)
  private financing: AccountUnits = new AccountUnits('');
  @JsonProperty('dividendAdjustment', AccountUnitsJsonConverter, true)
  private dividendAdjustment: AccountUnits = new AccountUnits('');
  @JsonProperty('guaranteedExecutionFees', AccountUnitsJsonConverter, true)
  private guaranteedExecutionFees: AccountUnits = new AccountUnits('');

  setUnits(units: DecimalNumber | Decimal | string): PositionSide {
    this.units = PrimitiveUtils.decimalNumberValue(units);
    return this;
  }

  getUnits(): DecimalNumber {
    return this.units;
  }

  setAveragePrice(averagePrice: PriceValue | Decimal | string): PositionSide {
    this.averagePrice = PriceCommonUtils.priceValue(averagePrice);
    return this;
  }

  getAveragePrice(): PriceValue {
    return this.averagePrice.copy();
  }

  setTradeIDs(tradeIDs: TradeID[] | string[]): PositionSide {
    const newTradeIDs = new Array<TradeID>();

    tradeIDs.forEach((item: any) => {
      if (item instanceof TradeID) {
        newTradeIDs.push(item.copy());
      } else {
        newTradeIDs.push(new TradeID(item));
      }
    });

    this.tradeIDs = newTradeIDs;
    return this;
  }

  getTradeIDs(): TradeID[] {
    const copyOfTradeIDs = new Array<TradeID>();
    this.tradeIDs.forEach(item => copyOfTradeIDs.push(item.copy()));
    return copyOfTradeIDs;
  }

  setPl(pl: AccountUnits | Decimal | string): PositionSide {
    this.pl = PrimitiveUtils.accountUnitValue(pl);
    return this;
  }

  getPl(): AccountUnits {
    return this.pl.copy();
  }

  setUnrealizedPL(unrealizedPL: AccountUnits | Decimal | string): PositionSide {
    this.unrealizedPL = PrimitiveUtils.accountUnitValue(unrealizedPL);
    return this;
  }

  getUnrealizedPL(): AccountUnits {
    return this.unrealizedPL.copy();
  }

  setResettablePL(resettablePL: AccountUnits | Decimal | string): PositionSide {
    this.resettablePL = PrimitiveUtils.accountUnitValue(resettablePL);
    return this;
  }

  getResettablePL(): AccountUnits {
    return this.resettablePL.copy();
  }

  setFinancing(financing: AccountUnits | Decimal | string): PositionSide {
    this.financing = PrimitiveUtils.accountUnitValue(financing);
    return this;
  }

  getFinancing(): AccountUnits {
    return this.financing.copy();
  }

  setDividendAdjustment(
    dividendAdjustment: AccountUnits | Decimal | string
  ): PositionSide {
    this.dividendAdjustment = PrimitiveUtils.accountUnitValue(
      dividendAdjustment
    );
    return this;
  }

  getDividendAdjustment(): AccountUnits {
    return this.dividendAdjustment.copy();
  }

  setGuaranteedExecutionFees(
    guaranteedExecutionFees: AccountUnits | Decimal | string
  ): PositionSide {
    this.guaranteedExecutionFees = PrimitiveUtils.accountUnitValue(
      guaranteedExecutionFees
    );
    return this;
  }

  getGuaranteedExecutionFees(): AccountUnits {
    return this.guaranteedExecutionFees.copy();
  }

  copy(): PositionSide {
    return new PositionSide()
      .setUnits(this.units.copy())
      .setAveragePrice(this.averagePrice.copy())
      .setTradeIDs(this.getTradeIDs())
      .setPl(this.pl.copy())
      .setUnrealizedPL(this.unrealizedPL.copy())
      .setResettablePL(this.resettablePL.copy())
      .setFinancing(this.financing.copy())
      .setDividendAdjustment(this.dividendAdjustment.copy())
      .setGuaranteedExecutionFees(this.guaranteedExecutionFees.copy());
  }
}
