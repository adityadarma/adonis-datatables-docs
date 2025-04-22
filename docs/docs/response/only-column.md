# Column Response

## Define response column
Get only column define.
```ts
return await datatables.of(transactions)
    .only(['id', 'name', 'email'])
    .results()
```

## Example Response
```object
{
    "draw": 1,
    "recordsTotal": 10,
    "recordsFiltered": 3,
    "data": [{
        "id": 476,
        "name": "Esmeralda Kulas",
        "email": "abbott.cali@heaney.info",
    }, {
        "id": 6,
        "name": "Zachery Muller",
        "email": "abdullah.koelpin@yahoo.com",
    }],
}