# Lucid Datatable

You can look at src/engines/lucid_datatabe class which handles the conversion of your Model into a readable DataTable API response.

## Via Service

```ts
import datatables from '@adityadarma/adonis-datatables/services/datatables'
import LucidDataTable from '@adityadarma/adonis-datatables/engines/lucid_datatable'

const transactions = Transaction.query().preload('user')
return await datatables.of<LucidDataTable>(transactions)
    .addIndexColumn()
    .addColumn('user_name', (row: Transaction) => {
        return row.user.name
    })
    .rawColumns(['intro'])
    .results()
```

## Via Class Parent

```ts
import Datatables from '@adityadarma/adonis-datatables/datatables'

const transactions = Transaction.query().preload('user')
return await Datatables.lucid(transactions)
    .addIndexColumn()
    .addColumn('user_name', (row: Transaction) => {
        return row.user.name
    })
    .rawColumns(['intro'])
    .results()
```

## Via Class Engine

```ts
import LucidDataTable from '@adityadarma/adonis-datatables/engines/lucid_datatable'

const transactions = Transaction.query().preload('user')
return await new LucidDataTable(transactions)
    .addIndexColumn()
    .addColumn('user_name', (row: Transaction) => {
        return row.user.name
    })
    .rawColumns(['intro'])
    .results()
```