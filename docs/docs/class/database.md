# Database Datatable

You can look at src/engines/database_datatabe class which handles the conversion of your Model into a readable DataTable API response.

## Query data
Source Data must respone as DatabaseQueryBuilderContract Class (run without await), then datatable class will execute query with condition request params from datatable.
```ts
const users = db.from('users').select('*', db.raw("CONCAT(users.name,' ',users.email) as fullname"))
```

## Via Service

```ts
import datatables from '@adityadarma/adonis-datatables/services/main'
import DatabaseDataTable from '@adityadarma/adonis-datatables/engines/database_datatable'

return await datatables.of<DatabaseDataTable>(users)
    .setContext(ctx) // optional
    .addIndexColumn()
    .addColumn('count_transactions', (row: Record<string, any>) => {
        return row.id
    })
    .editColumn('name', (row: Record<string, any>) => {
        return row.name
    })
    .results()
```

## Via Factory

```ts
import { Datatables } from '@adityadarma/adonis-datatables'

return await Datatables.database(transactions)
    .setContext(ctx) // optional
    .addIndexColumn()
    .addColumn('count_transactions', (row: Record<string, any>) => {
        return row.id
    })
    .editColumn('name', (row: Record<string, any>) => {
        return row.name
    })
    .results()
```

## Via Engine

```ts
import DatabaseDataTable from '@adityadarma/adonis-datatables/engines/database_datatable'

return await new DatabaseDataTable(users)
    .setContext(ctx) // optional
    .addIndexColumn()
    .addColumn('count_transactions', (row: Record<string, any>) => {
        return row.id
    })
    .editColumn('name', (row: Record<string, any>) => {
        return row.name
    })
    .results()
```