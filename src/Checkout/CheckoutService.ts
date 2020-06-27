import {CartWebService} from "../Cart/CartWebService";
import {CheckoutBuilder} from "./CheckoutBuilder";
import {PaymentMethodWebService} from "./PaymentMethod/PaymentMethodWebService";
import {CustomerWebService} from "../Customer/CustomerWebService";
import {PayOrderPayloadType} from "./PayOrderPayloadType";
import {OrderBuilder} from "../Order/OrderBuilder";

export class CheckoutService {
    private checkoutBuilder: CheckoutBuilder;
    private cartWebService: CartWebService;
    private paymentMethodWebService: PaymentMethodWebService;
    private customerWebService: CustomerWebService;
    private orderBuilder: OrderBuilder;

    constructor(
        checkoutBuilder: CheckoutBuilder,
        cartWebService: CartWebService,
        paymentMethodWebService: PaymentMethodWebService,
        customerWebService: CustomerWebService,
        orderBuilder: OrderBuilder
    ) {
        this.checkoutBuilder = checkoutBuilder;
        this.cartWebService = cartWebService;
        this.paymentMethodWebService = paymentMethodWebService;
        this.customerWebService = customerWebService;
        this.orderBuilder = orderBuilder;
    }

    public get(cartId: string) {
        const items = this.cartWebService.getCartItems(cartId);
        const paymentMethods = this.paymentMethodWebService.getAll(cartId);
        const customer = this.customerWebService.getCustomerByCartId(cartId);

        this.checkoutBuilder.buildCartId(cartId);
        this.checkoutBuilder.buildItems(items);
        this.checkoutBuilder.buildValue(items);
        this.checkoutBuilder.buildPaymentMethods(paymentMethods);
        this.checkoutBuilder.buildShippingAddress(customer.shippingAddress);

        return this.checkoutBuilder.getResult();
    }

    public payOrder(payOrderPayload: PayOrderPayloadType) {
        // build order
        const items = this.cartWebService.getCartItems(payOrderPayload.cartId);
        const customer = this.customerWebService.getCustomerByCartId(payOrderPayload.cartId);
        const paymentMethod = this.paymentMethodWebService.getById(payOrderPayload.paymentMethod.id);
        this.orderBuilder.buildItems(items);
        this.orderBuilder.buildValue(paymentMethod, items);
        this.orderBuilder.buildShippingAddress(customer.shippingAddress);
        this.orderBuilder.buildPaymentMethod(paymentMethod);
        this.orderBuilder.buildCreatedAt();
        const order = this.orderBuilder.getResult();

        /*
        // post order @ OrderService
        const orderServiceResult = this.orderService.create(order);
        const orderId = orderServiceResult.id;

        //pay order @ PaymentService
        const paymentServiceResult = this.paymentService.pay(orderId);

        // return info to front-end
        return {
            paymentServiceResult: paymentServiceResult,
            orderServiceResult: orderServiceResult
        }
         */

        return order;
    }

}