# Adding Column

You can add a custom column to your response by using the `addColumn` api.

## With edge syntax
```ts
return await datatables.of(transactions)
    .addColumn('intro', 'Hi {{$name}}!')
    .results()
```

## Using function
```ts
return await datatables.of(transactions)
    .addColumn('intro', function(row) {
        return 'Hi ' + row.name + '!';
    })
    .results()
```

## Using file edge
```ts
return await datatables.of(transactions)
    .addColumn('intro', 'pages.intro')
    .results()
```