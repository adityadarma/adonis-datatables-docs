# Response Result

## Method
Call method result to get response datatable class.
```ts
return await datatables.of(transactions)
    .results()
// or
return await Datatables.object(transactions)
    .results()
//or
return await new ObjectDataTable(transactions)
    .results()
```

## Example Response
```object
{
    "draw": 2,
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
    }]
}
```