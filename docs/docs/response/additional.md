# Additional Response

## Adding response using key and value
You can add additional server data on your response by using `with` api.
```ts
return await datatables.of(transactions)
    .with('count_transactions', 100)
    .results()
```

## Using object
```ts
return await datatables.of(transactions)
    .with({'count_transactions': 100})
    .results()
```

## Using function
```ts
return await datatables.of(transactions)
    .with('count_transactions', () => 100)
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
        "created_at": "2016-07-31 23:26:14",
        "updated_at": "2016-07-31 23:26:14",
        "deleted_at": null,
        "superior_id": 0
    }, {
        "id": 6,
        "name": "Zachery Muller",
        "email": "abdullah.koelpin@yahoo.com",
        "created_at": "2016-07-31 23:25:43",
        "updated_at": "2016-07-31 23:25:43",
        "deleted_at": null,
        "superior_id": 1
    }],
    "count_transactions": 100
}