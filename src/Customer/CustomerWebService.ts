export class CustomerWebService {
    public getCustomerByCartId(cartId: string) {
        return {
            name: 'John Doe',
            age: 25,
            shippingAddress: {
                street: 'R. Marechal Deodoro',
                number: 1001
            }
        }
    }
}