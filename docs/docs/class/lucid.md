# Lucid Datatable

You can look at src/engines/lucid_datatabe class which handles the conversion of your Model into a readable DataTable API response.

## Query data
Data must respone as ModelQueryBuilderContract (run without await), then datatable class will execute query with condition request params from datatable.
```ts
const transactions = Transaction.query().preload('user')
```

## Via Service

```ts
import datatables from '@adityadarma/adonis-datatables/services/main'
import LucidDataTable from '@adityadarma/adonis-datatables/engines/lucid_datatable'

return await datatables.of<LucidDataTable>(transactions)
    .setContext(ctx) // optional
    .addIndexColumn()
    .addColumn('user_name', (row: Transaction) => {
        return row.user.name
    })
    .rawColumns(['intro'])
    .results()
```

## Via Factory

```ts
import { Datatables } from '@adityadarma/adonis-datatables'

return await Datatables.lucid(transactions)
    .setContext(ctx) // optional
    .addIndexColumn()
    .addColumn('user_name', (row: Transaction) => {
        return row.user.name
    })
    .rawColumns(['intro'])
    .results()
```

## Via Engine

```ts
import LucidDataTable from '@adityadarma/adonis-datatables/engines/lucid_datatable'

return await new LucidDataTable(transactions)
    .setContext(ctx) // optional
    .addIndexColumn()
    .addColumn('user_name', (row: Transaction) => {
        return row.user.name
    })
    .rawColumns(['intro'])
    .results()
```