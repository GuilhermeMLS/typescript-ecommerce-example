

<h1> TypeScript E-commerce Example </h1>  
 
<p align="left">  
<img src="https://img.shields.io/badge/status-development-orange" alt="Status">  
<img src="https://img.shields.io/badge/language-TypeScript-blue" alt="Status">  
</p>  
  
A simple e-commerce REST API built with TypeScript to learn and practice design patterns.

  
<h3> Stack </h3>  
  
- [NodeJS](https://nodejs.org)
- [TypeScript](http://typescriptlang.org)
- [Express](https://expressjs.com)
  
<h3> Installation </h3>  
  
1) `$ git clone https://github.com/GuilhermeMLS/typescript-ecommerce-example.git`  
  
2) `$ cd typescript-ecommerce-example/`  
  
3) `$ npm install`  
  
4) `$ npm start`

<h3> Docs </h3>

- Simulate a checkout action

    - Endpoint: GET `/:cartId`
    - Response:
        ```json
        {
            "cartId": "123ABC",
            "value": 4500,
            "items": [
                {
                    "name": "Couch",
                    "value": 3200,
                    "id": 1
                },
                {
                    "name": "Bed",
                    "value": 700,
                    "id": 2
                },
                {
                    "name": "Desk",
                    "value": 600,
                    "id": 3
                }
            ],
            "paymentMethods": [
                {
                    "name": "Credit Card",
                    "tax": 0.05,
                    "valueToPay": 4725
                },
                {
                    "name": "Boleto",
                    "tax": 0,
                    "valueToPay": 4500
                },
                {
                    "name": "Financing",
                    "tax": 0.12,
                    "valueToPay": 5040
                }
            ],
            "shippingAddress": {
                "street": "R. Marechal Deodoro",
                "number": 1001
            }
        }
        ```  

- Simulate a payment action
 
    - Endpoint: POST `/`  
    - Body:
        ```json
        {
            "cartId": "123ABC",
            "paymentMethod": {
                "id": 1
            }
        } 
        ```
    - Response:
        ```json
        {
            "items": [
                {
                    "name": "Couch",
                    "value": 3200,
                    "id": 1
                },
                {
                    "name": "Bed",
                    "value": 700,
                    "id": 2
                },
                {
                    "name": "Desk",
                    "value": 600,
                    "id": 3
                }
            ],
            "value": 4725,
            "shippingAddress": {
                "street": "R. Marechal Deodoro",
                "number": 1001
            },
            "paymentMethod": {
                "id": 1,
                "name": "Credit Card",
                "tax": 0.05
            },
            "createdAt": 1593219325744
        }
        ```
  
 

