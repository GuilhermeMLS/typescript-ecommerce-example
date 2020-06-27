export class Address {
    private _street: string;
    private _number: number;

    public print() {
        return {
            street: this.street,
            number: this.number
        }
    }

    get street(): string {
        return this._street;
    }

    set street(value: string) {
        this._street = value;
    }

    get number(): number {
        return this._number;
    }
    set number(value: number) {
        this._number = value;
    }
}