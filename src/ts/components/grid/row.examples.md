#### Example

```js
<div className="display-columns">
  <Row>
    <Column>
      Row 1
    </Column>
  </Row>
  <Row>
    <Column xs={6}>
      Row 2
    </Column>
    <Column xs={6}>
      Row 2
    </Column>
  </Row>
  <Row>
    <Column xs={4}>
      Row 3
    </Column>
    <Column xs={4}>
      Row 3
    </Column>
    <Column xs={4}>
      Row 3
    </Column>
  </Row>
</div>
```

#### Less variables

```less
@grid-divisions: 12;
@gutter-width: 30px;
```
