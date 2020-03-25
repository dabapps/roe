#### Example

```js
const { TableHead } = require('./table-head');
const { TableBody } = require('./table-body');
const { TableRow } = require('./table-row');
const { TableHeader } = require('./table-header');
const { TableCell } = require('./table-cell');

<div>
  <Table bordered condensed>
    <TableHead>
      <TableRow>
        <TableHeader />
        <TableHeader>Header 1</TableHeader>
        <TableHeader>Header 2</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Row 1</TableCell>
        <TableCell>Column 1</TableCell>
        <TableCell>Column 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 2</TableCell>
        <TableCell>Column 1</TableCell>
        <TableCell>Column 2</TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <Table striped hover fill fixRowHeaders rowHeaderWidth={200}>
    <TableHead>
      <TableRow>
        <TableHeader width={200} />
        <TableHeader>Header 1</TableHeader>
        <TableHeader>Header 2</TableHeader>
        <TableHeader>Header 3</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell width={200}>Row 1</TableCell>
        <TableCell>Column 1</TableCell>
        <TableCell>Column 2</TableCell>
        <TableCell>Column 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell width={200}>Row 2</TableCell>
        <TableCell>Column 1</TableCell>
        <TableCell>Column 2</TableCell>
        <TableCell>Column 3</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>;
```

#### Less variables

```less
@table-stripe: @grey-lightest;
@table-hover: darken(@grey-lightest, 3%);
@table-border: @border-base;
```
