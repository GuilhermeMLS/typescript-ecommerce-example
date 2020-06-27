import {Item} from "./Item/Item";
import {PaymentMethod} from "./PaymentMethod/PaymentMethod";
import {Address} from "./Address/Address";

export class Checkout {
    private _cartId: string;
    private _value: number;
    private _items: Item[];
    private _paymentMethods: PaymentMethod[];
    private _shippingAddress: Address;

    print() {
        return {
            cartId: this.cartId,
            value: this.value,
            items: this.items.map(item => item.print()),
            paymentMethods: this.paymentMethods.map(paymentMethod => paymentMethod.print()),
            shippingAddress: this.shippingAddress.print()
        }
    }

    get cartId(): string {
        return this._cartId;
    }

    set cartId(value: string) {
        this._cartId = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get items(): Item[] {
        return this._items;
    }

    set items(value: Item[]) {
        this._items = value;
    }

    get paymentMethods(): PaymentMethod[] {
        return this._paymentMethods;
    }

    set paymentMethods(value: PaymentMethod[]) {
        this._paymentMethods = value;
    }

    get shippingAddress(): Address {
        return this._shippingAddress;
    }
    set shippingAddress(value: Address) {
        this._shippingAddress = value;
    }
}