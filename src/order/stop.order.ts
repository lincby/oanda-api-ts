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

@JsonObject('StopOrder')
export class StopOrder implements Order {
    @JsonProperty('id', OrderIdJsonConverter, true)
    private id: OrderID = new OrderID('');
    @JsonProperty('type', String, true)
    private type: OrderType = OrderType.STOP;
    @JsonProperty('createTime', DateTimeJsonConverter, true)
    private createTime: DateTime = new DateTime('');
    @JsonProperty('state', String, true)
    private state: OrderState = OrderState.CANCELLED;
    @JsonProperty('clientExtensions', ClientExtensions, true)
    private clientExtensions: ClientExtensions = new ClientExtensions();

    setId(id: OrderID | string): StopOrder {
        this.id = OrderUtils.orderIdValue(id);
        return this;
    }

    getId(): OrderID {
        return this.id.copy();
    }

    getType(): OrderType {
        return this.type;
    }

    setCreateTime(createTime: DateTime | string): StopOrder {
        this.createTime = PrimitiveUtils.dateTimeValue(createTime);
        return this;
    }

    getCreateTime(): DateTime {
        return this.createTime.copy();
    }

    setState(state: OrderState): StopOrder {
        this.state = state;
        return this;
    }
    getState(): OrderState {
        return this.state;
    }

    setClientExtensions(clientExtensions: ClientExtensions): StopOrder {
        this.clientExtensions = clientExtensions.copy();
        return this;
    }

    getClientExtensions(): ClientExtensions {
        return this.clientExtensions.copy();
    }

    copy(): StopOrder {
        return new StopOrder()
            .setId(this.id.copy())
            .setCreateTime(this.createTime.copy())
            .setState(this.state)
            .setClientExtensions(this.clientExtensions.copy());
    }
}
