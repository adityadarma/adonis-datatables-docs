# Raw Column

By default, Laravel DataTables protects us from XSS attack by escaping all our outputs. In cases where you want to render an html content, please use `rawColumns` api.

```ts
return await datatables.of(transactions)
    .addColumn('link', '<a href="#">Html Column</a>')
    .addColumn('action', 'path.to.view')
    .rawColumns(['link', 'action'])
    .results()
```