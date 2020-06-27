import {Item} from "../Checkout/Item/Item";
import {Address} from "../Checkout/Address/Address";
import {PaymentMethodType} from "../Checkout/PaymentMethod/PaymentMethodType";

export class Order {
    private _items: Item[];
    private _value: number;
    private _shippingAddress: Address;
    private _paymentMethod: PaymentMethodType;
    private _createdAt: number;

    public print() {
        return {
            items: this.items.map(item => item.print()),
            value: this.value,
            shippingAddress: this.shippingAddress.print(),
            paymentMethod: this.paymentMethod,
            createdAt: this.createdAt
        }
    }

    get items(): Item[] {
        return this._items;
    }

    set items(value: Item[]) {
        this._items = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get shippingAddress(): Address {
        return this._shippingAddress;
    }

    set shippingAddress(value: Address) {
        this._shippingAddress = value;
    }

    get paymentMethod(): PaymentMethodType {
        return this._paymentMethod;
    }

    set paymentMethod(value: PaymentMethodType) {
        this._paymentMethod = value;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    set createdAt(value: number) {
        this._createdAt = value;
    }


}