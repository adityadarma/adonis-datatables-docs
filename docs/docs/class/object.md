# Object Datatable

You can look at src/engines/object_datatabe class which handles the conversion of your Model into a readable DataTable API response.

## Query data
Source Data respone as Objet (after await), then datatable class will filter data with condition request params from datatable.
```ts
const transactions = await Transaction.query().preload('user')
```

## Via Service

```ts
import datatables from '@adityadarma/adonis-datatables/services/main'
import ObjectDataTable from '@adityadarma/adonis-datatables/engines/object_datatable'

return await datatables.of<ObjectDataTable>(users)
    .setContext(ctx) // optional
    .addIndexColumn()
    .addColumn('count_transactions', 0)
    .addColumn('intro', (row: Transaction) => {
        return ctx.view.renderSync('text', {code: row.code})
    })
    .rawColumns(['intro'])
    .results()
```
## Via Factory

```ts
import { Datatables } from '@adityadarma/adonis-datatables'

return await Datatables.object(transactions)
    .setContext(ctx) // optional
    .addIndexColumn()
    .addColumn('count_transactions', 0)
    .addColumn('intro', (row: Transaction) => {
        return ctx.view.renderSync('text', {code: row.code})
    })
    .rawColumns(['intro'])
    .results()
```

## Via Engine

```ts
import ObjectDataTable from '@adityadarma/adonis-datatables/engines/object_datatable'

return await new ObjectDataTable(transactions)
    .setContext(ctx) // optional
    .addIndexColumn()
    .addColumn('count_transactions', 0)
    .addColumn('intro', (row: Transaction) => {
        return ctx.view.renderSync('text', {code: row.code})
    })
    .rawColumns(['intro'])
    .results()

```