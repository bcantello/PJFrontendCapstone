# Mock Server API Documentation
The mock server has two endpoints.

## Transactions
### `GET /transactions`
This will return a list of transactions.

Example response:
```
{
    transactions: [
        {
            "name": "garrett",
            "amount" 12.99,
            "status": "Approved"
            "created": "2019-10-31T12:00:00"
        },
        ...
    ]
}
```

### `POST /transactions`
This will create a transaction.

It expects the following parameters:
1. name
2. amount
3. cardNumber
4. cardExpMonth
5. cardExpYear
6. cardCvv

If successful it will return a `200` status and in the body: `true`

If any parameters are invalid it will return a `400` status and in the body:
```
{
    parameter1: ["my error message here"],
    parameter2: ["my other error"]
}
``` 
