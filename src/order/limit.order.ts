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

    copy(): LimitOrder {
        return new LimitOrder()
            .setId(this.id.copy())
            .setCreateTime(this.createTime.copy())
            .setState(this.state)
            .setClientExtensions(this.clientExtensions.copy());
    }
}
