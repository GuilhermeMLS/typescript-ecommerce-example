import {CheckoutService} from "./CheckoutService";
import {PayOrderPayloadType} from "./PayOrderPayloadType";

export class CheckoutController {
    private checkoutService: CheckoutService;

    constructor(
        checkoutService: CheckoutService
    ) {
        this.checkoutService = checkoutService;
    }

    get(cartId: string) {
        return this.checkoutService.get(cartId).print();
    }

    payOrder(createCheckoutPayload: PayOrderPayloadType) {
        return this.checkoutService.payOrder(createCheckoutPayload).print();
    }
}