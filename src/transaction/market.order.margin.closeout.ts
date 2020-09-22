import {JsonProperty, JsonObject} from 'json2typescript';
import {MarketOrderMarginCloseoutReason} from './market.order.margin.closeout.reason';

@JsonObject('MarketOrderMarginCloseout')
export class MarketOrderMarginCloseout {
    @JsonProperty('reason', String, true)
    private reason: MarketOrderMarginCloseoutReason = MarketOrderMarginCloseoutReason.MARGIN_CHECK_VIOLATION;

    setReason(reason: MarketOrderMarginCloseoutReason): MarketOrderMarginCloseout {
        this.reason = reason;
        return this;
    }

    getReason(): MarketOrderMarginCloseoutReason {
        return this.reason;
    }

    copy(): MarketOrderMarginCloseout {
        return new MarketOrderMarginCloseout()
            .setReason(this.reason);
    }
}
