import {JsonObject, JsonProperty} from 'json2typescript';
import {Order} from './order';
import {OrderID} from './order.id';
import {OrderIdJsonConverter} from '../converter/order/order.id.json.converter';
import {OrderType} from './order.type';
import {DateTimeJsonConverter} from '../converter/primitives/date.time.json.converter';
import {DateTime} from '../primitives/date.time';
import {OrderState} from './order.state';
import {ClientExtensions} from '../transaction/client.extensions';
import {OrderUtils} from '../util/order.utils';
import {PrimitiveUtils} from '../util/primitive.utils';
import {InstrumentName} from '../primitives/instrument.name';
import {InstrumentNameJsonConverter} from '../converter/primitives/instrument.name.json.converter';
import {DecimalNumber} from '../primitives/decimal.number';
import {DecimalNumberJsonConverter} from '../converter/primitives/decimal.number.json.converter';
import Decimal from 'decimal.js';
import {PriceValue} from '../price_common/price.value';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import {TimeInForce} from './time.in.force';
import {OrderPositionFill} from './order.position.fill';

@JsonObject('LimitOrder')
export class LimitOrder implements Order {
    @JsonProperty('id', OrderIdJsonConverter, true)
    private id: OrderID = new OrderID('');
    @JsonProperty('type', String, true)
    private type: OrderType = OrderType.LIMIT;
    @JsonProperty('createTime', DateTimeJsonConverter, true)
    private createTime: DateTime = new DateTime('');
    @JsonProperty('state', String, true)
    private state: OrderState = OrderState.CANCELLED;
    @JsonProperty('clientExtensions', ClientExtensions, true)
    private clientExtensions: ClientExtensions = new ClientExtensions();
    @JsonProperty('instrument', InstrumentNameJsonConverter, true)
    private instrument: InstrumentName = new InstrumentName('');
    @JsonProperty('units', DecimalNumberJsonConverter, true)
    private units: DecimalNumber = new DecimalNumber('');
    @JsonProperty('price', PriceValueJsonConverter, true)
    private price: PriceValue = new PriceValue('');
    @JsonProperty('timeInForce', String, true)
    private timeInForce: TimeInForce = TimeInForce.GTC;
    @JsonProperty('gtdTime', DateTimeJsonConverter, true)
    private gtdTime: DateTime = new DateTime('');
    @JsonProperty('positionFill', String, true)
    private positionFill: OrderPositionFill = OrderPositionFill.DEFAULT;

    setId(id: OrderID | string): LimitOrder {
        this.id = OrderUtils.orderIdValue(id);
        return this;
    }

    getId(): OrderID {
        return this.id.copy();
    }

    getType(): OrderType {
        return this.type;
    }

    setCreateTime(createTime: DateTime | string): LimitOrder {
        this.createTime = PrimitiveUtils.dateTimeValue(createTime);
        return this;
    }

    getCreateTime(): DateTime {
        return this.createTime.copy();
    }

    setState(state: OrderState): LimitOrder {
        this.state = state;
        return this;
    }
    getState(): OrderState {
        return this.state;
    }

    setClientExtensions(clientExtensions: ClientExtensions): LimitOrder {
        this.clientExtensions = clientExtensions.copy();
        return this;
    }

    getClientExtensions(): ClientExtensions {
        return this.clientExtensions.copy();
    }

    setInstrument(instrument: InstrumentName | string): LimitOrder {
        this.instrument = PrimitiveUtils.instrumentNameValue(instrument);
        return this;
    }

    getInstrument(): InstrumentName {
        return this.instrument.copy();
    }

    setUnits(units: DecimalNumber | Decimal | string): LimitOrder {
        this.units = PrimitiveUtils.decimalNumberValue(units);
        return this;
    }

    getUnits(): DecimalNumber {
        return this.units.copy();
    }

    setTimeInForce(timeInForce: TimeInForce): LimitOrder {
        this.timeInForce = timeInForce;
        return this;
    }

    getTimeInForce(): TimeInForce {
        return this.timeInForce;
    }

    setGtdTime(gtdTime: DateTime | string): LimitOrder {
        this.gtdTime = PrimitiveUtils.dateTimeValue(gtdTime);
        return this;
    }

    getGtdTime(): DateTime {
        return this.gtdTime.copy();
    }

    setPositionFill(positionFill: OrderPositionFill): LimitOrder {
        this.positionFill = positionFill;
        return this;
    }

    getPositionFill(): OrderPositionFill {
        return this.positionFill;
    }

    copy(): LimitOrder {
        return new LimitOrder()
            .setId(this.id.copy())
            .setCreateTime(this.createTime.copy())
            .setState(this.state)
            .setClientExtensions(this.clientExtensions.copy())
            .setInstrument(this.instrument.copy())
            .setUnits(this.units.copy())
            .setTimeInForce(this.timeInForce)
            .setGtdTime(this.gtdTime.copy())
            .setPositionFill(this.positionFill);
    }
}
