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

The `flex-grid` class can be added to a row to allow columns of varying heights to reflow nicely.

```js
<Row className="flex-grid">
  <Column xs={12} sm={6} md={4} lg={3}>
    <ContentBox>
      <DabIpsum count={2} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3}>
    <ContentBox>
      <DabIpsum count={1} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3}>
    <ContentBox>
      <DabIpsum count={2} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3}>
    <ContentBox>
      <DabIpsum count={1} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3}>
    <ContentBox>
      <DabIpsum count={2} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3}>
    <ContentBox>
      <DabIpsum count={2} />
    </ContentBox>
  </Column>
</Row>
```

#### Less variables

```less
@grid-divisions: 12;
@gutter-width: 30px;
```
