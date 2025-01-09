# Object Datatable

You can look at src/engines/object_datatabe class which handles the conversion of your Model into a readable DataTable API response.

## Via Service

```ts
import datatables from '@adityadarma/adonis-datatables/services/main'
import ObjectDataTable from '@adityadarma/adonis-datatables/engines/object_datatable'

const transactions = await Transaction.query().preload('user')
return await datatables.of<ObjectDataTable>(users)
    .setContext(ctx)
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

const transactions = await Transaction.query().preload('user')
return await Datatables.object(transactions)
    .setContext(ctx)
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

const transactions = await Transaction.query().preload('user')
return await new ObjectDataTable(transactions).
    .setContext(ctx)
    .addIndexColumn()
    .addColumn('count_transactions', 0)
    .addColumn('intro', (row: Transaction) => {
        return ctx.view.renderSync('text', {code: row.code})
    })
    .rawColumns(['intro'])
    .results()

```