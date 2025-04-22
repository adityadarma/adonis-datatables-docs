# Relationship Searching

DataTables support searching and sorting of eager loaded relationships when using `Lucid`. In this example, I will show you how to setup a eager loading search using `LucidEngine`.

To enable search, we need to eager load the relationship we intend to use using Adonis's `Transaction::preload('user')` api.

```ts
const transactions = Transaction.query().preload('user')

return await datatables.of(transactions)
    .addColumn('user.name', function(row) {
        return row.user.name
    })
    .results()
```

```js
$(document).ready(function() {
    $('#datatable').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{{ route("transactions") }}',
        columns: [
            {data: 'id', name: 'id'},
            {data: 'code', name: 'code'},
            {data: 'amount', name: 'amount'},
            {data: 'user.name', name: 'user.name'},
            {data: 'created_at', name: 'created_at'},
            {data: 'updated_at', name: 'updated_at'}
        ]
    });
});
```