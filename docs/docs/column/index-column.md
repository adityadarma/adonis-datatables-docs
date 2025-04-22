# Index Column

In some cases, you need to track the index of the records on your response. To achieve this, you can add an index column on your response by using `addIndexColumn` api.

```ts
return await datatables.of(transactions)
    .addIndexColumn()
    .results()
```

## Set Manual
```ts
return await datatables.of(transactions)
    .setRowId('id')
    .results()
```