import {Order} from './order';
import {OrderID} from './order.id';
import {JsonObject, JsonProperty} from 'json2typescript';
import {OrderIdJsonConverter} from '../converter/order/order.id.json.converter';
import {OrderType} from './order.type';
import {DateTimeJsonConverter} from '../converter/primitives/date.time.json.converter';
import {DateTime} from '../primitives/date.time';
import {OrderUtils} from '../util/order.utils';
import {PrimitiveUtils} from '../util/primitive.utils';
import {OrderState} from './order.state';
import {ClientExtensions} from '../transaction/client.extensions';

@JsonObject('FixedPriceOrder')
export class FixedPriceOrder implements Order {
    @JsonProperty('id', OrderIdJsonConverter, true)
    private id: OrderID = new OrderID('');
    @JsonProperty('type', String, true)
    private type: OrderType = OrderType.FIXED_PRICE;
    @JsonProperty('createTime', DateTimeJsonConverter, true)
    private createTime: DateTime = new DateTime('');
    @JsonProperty('state', String, true)
    private state: OrderState = OrderState.CANCELLED;
    @JsonProperty('clientExtensions', ClientExtensions, true)
    private clientExtensions: ClientExtensions = new ClientExtensions();

    setId(id: OrderID | string): FixedPriceOrder {
        this.id = OrderUtils.orderIdValue(id);
        return this;
    }

    getId(): OrderID {
        return this.id.copy();
    }

    getType(): OrderType {
        return this.type;
    }

    setCreateTime(createTime: DateTime | string): FixedPriceOrder {
        this.createTime = PrimitiveUtils.dateTimeValue(createTime);
        return this;
    }

    getCreateTime(): DateTime {
        return this.createTime.copy();
    }

    setState(state: OrderState): FixedPriceOrder {
        this.state = state;
        return this;
    }
    getState(): OrderState {
        return this.state;
    }

    setClientExtensions(clientExtensions: ClientExtensions): FixedPriceOrder {
        this.clientExtensions = clientExtensions.copy();
        return this;
    }

    getClientExtensions(): ClientExtensions {
        return this.clientExtensions.copy();
    }

    copy(): FixedPriceOrder {
        return new FixedPriceOrder()
            .setId(this.id.copy())
            .setCreateTime(this.createTime.copy())
            .setState(this.state)
            .setClientExtensions(this.clientExtensions.copy());
    }
}
