export class Item {
    private _name: string;
    private _value: number;
    private _id: number;

    public print() {
        return {
            name: this.name,
            value: this.value,
            id: this.id
        }
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }
}