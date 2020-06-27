import {Checkout} from "./Checkout";
import {Item} from "./Item/Item";
import {ItemType} from "./Item/ItemType";
import {PaymentMethodType} from "./PaymentMethod/PaymentMethodType";
import {PaymentMethod} from "./PaymentMethod/PaymentMethod";
import {Address} from "./Address/Address";
import {AddressType} from "./Address/AddressType";

export class CheckoutBuilder {
    private checkout: Checkout;

    constructor() {
        this.reset();
    }

    public reset() {
        this.checkout = new Checkout();
    }

    public buildCartId(cartId: string) {
        this.checkout.cartId = cartId;
    }

    public buildValue(items: ItemType[]): void {
        this.checkout.value = items.reduce((accumulator, item) => {
            return item.value + accumulator;
        }, 0);
    }

    public buildItems(items: ItemType[]): void {
        this.checkout.items = items.map((itemRawData) => {
            const item = new Item();
            item.id = itemRawData.id;
            item.value = itemRawData.value;
            item.name = itemRawData.name;
            return item;
        });
    }

    public buildPaymentMethods(paymentMethods: PaymentMethodType[]): void {
        this.checkout.paymentMethods = paymentMethods.map((paymentMethodRawData) => {
            const paymentMethod = new PaymentMethod();
            paymentMethod.id = paymentMethodRawData.id;
            paymentMethod.name = paymentMethodRawData.name;
            paymentMethod.tax = paymentMethodRawData.tax;
            paymentMethod.valueToPay = this.calculateValueToPay(this.checkout.value, paymentMethodRawData.tax);

            return paymentMethod;
        })
    }

    private calculateValueToPay(value: number, tax: number): number {
        return value + (value * tax);
    }

    public buildShippingAddress(shippingAddress: AddressType): void {
        const address = new Address();
        address.street = shippingAddress.street;
        address.number = shippingAddress.number;
        this.checkout.shippingAddress = address;
    }

    public getResult(): Checkout {
        const result = this.checkout;
        this.reset();
        return result;
    }
}