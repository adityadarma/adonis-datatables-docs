# Editing Column

You can add a custom column to your response by using the `editColumn` api.

## With edge syntax
```ts
return await datatables.of(transactions)
    .editColumn('intro', 'Hi {{$name}}!')
    .results()
```

## Using function
```ts
return await datatables.of(transactions)
    .editColumn('intro', function(row) {
        return 'Hi ' + row.name + '!';
    })
    .results()
```

## Using file edge
```ts
return await datatables.of(transactions)
    .editColumn('intro', 'pages.intro')
    .results()
```