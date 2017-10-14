#### Example

```js
<Row>
  <Column xs={12} md={4} mdOffset={2} lg={3} lgOffset={0}>
    Column 1
  </Column>
  <Column xs={12} md={4} mdFill={2} lg={3} lgFill={0}>
    Column 2
  </Column>
  <Column xs={12} md={4} mdOffset={2} lg={3} lgOffset={0} lgPush={3}>
    Column 3
  </Column>
  <Column xs={12} md={4} mdFill={2} lg={3} lgFill={0} lgPull={3}>
    Column 4
  </Column>
</Row>
```

#### Less variables

```less
@grid-divisions: 12;
@gutter-width: 30px;
```
