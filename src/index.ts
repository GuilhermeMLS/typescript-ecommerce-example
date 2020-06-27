import {CheckoutController} from "./Checkout/CheckoutController";
import {CheckoutService} from "./Checkout/CheckoutService";
import {CartWebService} from "./Cart/CartWebService";
import {CheckoutBuilder} from "./Checkout/CheckoutBuilder";
import {PaymentMethodWebService} from "./Checkout/PaymentMethod/PaymentMethodWebService";
import {CustomerWebService} from "./Customer/CustomerWebService";
import {OrderBuilder} from "./Order/OrderBuilder";
import express from 'express';

const orderBuilder = new OrderBuilder();
const checkoutBuilder = new CheckoutBuilder();
const cartWebService = new CartWebService();
const paymentMethodWebService = new PaymentMethodWebService();
const customerWebService = new CustomerWebService();
const checkoutService = new CheckoutService(
    checkoutBuilder,
    cartWebService,
    paymentMethodWebService,
    customerWebService,
    orderBuilder
);
const checkoutController = new CheckoutController(checkoutService);

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get( "/:cartId", ( req, res ) => {
    res.send(checkoutController.get(req.params.cartId));
} );

app.post("/", ( req, res ) => {
    res.send(checkoutController.payOrder(req.body));
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
