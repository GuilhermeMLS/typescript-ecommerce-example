import {Order} from "./Order";
import {ItemType} from "../Checkout/Item/ItemType";
import {Item} from "../Checkout/Item/Item";
import {PaymentMethodType} from "../Checkout/PaymentMethod/PaymentMethodType";
import {AddressType} from "../Checkout/Address/AddressType";
import {Address} from "../Checkout/Address/Address";

export class OrderBuilder {
    private order: Order;

    constructor() {
        this.reset();
    }

    public reset() {
        this.order = new Order();
    }

    public buildItems(items: ItemType[]): void {
        this.order.items = items.map((itemRawData) => {
            const item = new Item();
            item.id = itemRawData.id;
            item.value = itemRawData.value;
            item.name = itemRawData.name;
            return item;
        });
    }

    public buildValue(paymentMethod: PaymentMethodType, items: ItemType[]) {
        const itemsValue = this.calculateItemsValue(items);
        this.order.value = this.calculateValueToPay(itemsValue, paymentMethod.tax)
    }

    private calculateItemsValue (items: ItemType[]) {
        return items.reduce((accumulator, item) => {
            return item.value + accumulator;
        }, 0);
    }

    private calculateValueToPay(value: number, tax: number): number {
        return value + (value * tax);
    }

    public buildShippingAddress(shippingAddress: AddressType): void {
        const address = new Address();
        address.street = shippingAddress.street;
        address.number = shippingAddress.number;
        this.order.shippingAddress = address;
    }

    public buildPaymentMethod(paymentMethod: PaymentMethodType): void {
        this.order.paymentMethod = paymentMethod;
    }

    public buildCreatedAt(): void {
        this.order.createdAt = Date.now();
    }

    public getResult(): Order {
        const result = this.order;
        this.reset();
        return result;
    }
}