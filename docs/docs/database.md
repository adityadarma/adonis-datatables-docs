# Database Datatable

You can look at src/engines/database_datatabe class which handles the conversion of your Model into a readable DataTable API response.

## Via Service

```ts
import datatables from '@adityadarma/adonis-datatables/datatables'
import DatabaseDataTable from '@adityadarma/adonis-datatables/engines/database_datatable'

const users = db.from('users').select('*', db.raw("CONCAT(users.name,' ',users.email) as fullname"))
return await datatables.of<DatabaseDataTable>(users)
    .setContext(ctx)
    .addColumn('count_transactions', (row: Record<string, any>) => {
        return row.id
    })
    .editColumn('name', (row: Record<string, any>) => {
        return row.name
    })
    .results()
```

## Via Class Parent

```ts
import Datatables from '@adityadarma/adonis-datatables/datatables'

const users = db.from('users').select('*', db.raw("CONCAT(users.name,' ',users.email) as fullname"))
return await Datatables.database(transactions)
    .setContext(ctx)
    .addColumn('count_transactions', (row: Record<string, any>) => {
        return row.id
    })
    .editColumn('name', (row: Record<string, any>) => {
        return row.name
    })
    .results()
```

## Via Class Engine

```ts
import DatabaseDataTable from '@adityadarma/adonis-datatables/engines/database_datatable'

const users = db.from('users').select('*', db.raw("CONCAT(users.name,' ',users.email) as fullname"))
return await new DatabaseDataTable(users)
    .setContext(ctx)
    .addColumn('count_transactions', (row: Record<string, any>) => {
        return row.id
    })
    .editColumn('name', (row: Record<string, any>) => {
        return row.name
    })
    .results()
```