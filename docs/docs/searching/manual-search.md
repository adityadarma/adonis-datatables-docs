# Searching Manual

You can optionally write your own manual filtering functions and thus disabling global search of the package. To achieve this, you can use the `filter` api.

```ts
return await datatables.of(transactions)
    .filter(function(query) {
        if(request.name){
            query.where('name', 'like', '%' + request.name + '%')
        }
    })
    .results()
```