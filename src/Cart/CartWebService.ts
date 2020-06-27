export class CartWebService {
    public getCartItems(cartId: string) {
        return [
            {
                id: 1,
                name: 'Couch',
                value: 3200
            },
            {
                id: 2,
                name: 'Bed',
                value: 700
            },
            {
                id: 3,
                name: 'Desk',
                value: 600
            }
        ];
    }
}