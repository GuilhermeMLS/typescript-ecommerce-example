const creditCard = {
    id: 1,
    name: 'Credit Card',
    tax: 0.05
};
const boleto = {
    id: 2,
    name: 'Boleto',
    tax: 0.0
};
const financing = {
    id: 3,
    name: 'Financing',
    tax: 0.12
};

export class PaymentMethodWebService {
    public getAll(cartId: string) {
        return [creditCard, boleto, financing];
    }

    public getById(id: number) {
        switch (id) {
            case 1: return creditCard;
            case 2: return boleto;
            case 3: return financing;
        }
    }
}