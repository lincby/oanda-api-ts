import {JsonConverter, JsonCustomConvert, JsonConvert} from 'json2typescript';
import {MarketOrder} from '../../order/market.order';
import {FixedPriceOrder} from '../../order/fixed.price.order';
import {OrderType} from '../../order/order.type';

@JsonConverter
export class OrderArrayJsonConverter implements JsonCustomConvert <(MarketOrder | FixedPriceOrder) []> {
    serialize(orders: (MarketOrder | FixedPriceOrder) []): string[] {
        const serializedOrders = new Array<string>();
        const jsonConvert: JsonConvert = new JsonConvert();

        orders.forEach(item => {
            const json: string = jsonConvert.serializeObject(item);
            serializedOrders.push(json);
        });

        return serializedOrders;
    }

    deserialize(orders: string[]): (MarketOrder | FixedPriceOrder) [] {
        const deserializedOrders = new Array<MarketOrder | FixedPriceOrder>();
        const jsonConvert: JsonConvert = new JsonConvert();

        orders.forEach(item => {
            const itemString = JSON.stringify(item);

            if (itemString.includes(OrderType.MARKET)) {
                const order: MarketOrder = jsonConvert.deserializeObject(item, MarketOrder);
                deserializedOrders.push(order);
            } else if (itemString.includes(OrderType.FIXED_PRICE)) {
                const order: FixedPriceOrder = jsonConvert.deserializeObject(item, FixedPriceOrder);
                deserializedOrders.push(order);
            }

        });

        return deserializedOrders;
    }
}
