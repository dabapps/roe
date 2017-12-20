#### Example

```js
const { TableHead } = require('./table-head');
const { TableBody } = require('./table-body');
const { TableRow } = require('./table-row');
const { TableHeader } = require('./table-header');
const { TableCell } = require('./table-cell');

const ROW_HEADER_WIDTH = 200;

const TABLE_DATA = [
  [null, 'Header 1', 'Header 2', 'Header 3', 'Header 4', 'Header 5'],
  ['Row 1', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
  ['Row 2', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
  ['Row 3', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
  ['Row 4', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
  ['Row 5', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5']
];

const [HEADERS, ...ROWS] = TABLE_DATA;

<div>
  <Table bordered condensed>
    <TableHead>
      <TableRow>
        <TableHeader />
        <TableHeader>
          Header 1
        </TableHeader>
        <TableHeader>
          Header 2
        </TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          Row 1
        </TableCell>
        <TableCell>
          Column 1
        </TableCell>
        <TableCell>
          Column 2
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Row 2
        </TableCell>
        <TableCell>
          Column 1
        </TableCell>
        <TableCell>
          Column 2
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <Table striped hover fill fixRowHeaders height={100} rowHeaderWidth={ROW_HEADER_WIDTH}>
    <TableHead>
      <TableRow>
        {
          HEADERS.map((header, index) => (
            <TableHeader key={header} width={!index ? ROW_HEADER_WIDTH : null}>
              {header}
            </TableHeader>
          ))
        }
      </TableRow>
    </TableHead>
    <TableBody>
      {
        ROWS.map((row) => (
          <TableRow key={row[0]}>
            {
              row.map((cell, index) => (
                <TableCell width={!index ? ROW_HEADER_WIDTH : null} key={cell}>
                  {cell}
                </TableCell>
              ))
            }
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
</div>
```

#### Less variables

```less
@table-stripe: @grey-lightest;
@table-hover: darken(@grey-lightest, 3%);
@table-border: @border-base;
```
