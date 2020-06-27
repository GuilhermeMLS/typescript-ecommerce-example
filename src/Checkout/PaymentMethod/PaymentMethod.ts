export class PaymentMethod {
    private _id: number;
    private _name: string;
    private _tax: number;
    private _valueToPay: number;

    print() {
        return {
            name: this.name,
            tax: this.tax,
            valueToPay: this.valueToPay
        }
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get tax(): number {
        return this._tax;
    }

    set tax(value: number) {
        this._tax = value;
    }

    get valueToPay(): number {
        return this._valueToPay;
    }
    set valueToPay(value: number) {
        this._valueToPay = value;
    }
}