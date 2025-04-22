# Remove Column

You can add a custom column to your response by using the `removeColumn` api.

```ts
return await datatables.of(transactions)
    .removeColumn('intro')
    .results()
```