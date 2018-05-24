Used to change the css `display` property of an element on different screen sizes.

Available display types are: `none`, `block`, `inline`, and `inline-block`.

Note: `display-none` is an alias for `xs-display-none`, and `display-block` an alias for `xs-display-block`, etc.

#### Examples

```js
<Row className="display-column">
  <Column xs={6} className="xs-display-none sm-display-block md-display-none">
    xs-display-none sm-display-block md-display-none
  </Column>
  <Column xs={6} className="xs-display-block sm-display-none md-display-block">
    xs-display-block sm-display-none md-display-block
  </Column>
</Row>
```

You can use `display-flex` to easily make a child component fill its parent, for example, in a flex grid:

```js
<Row className="flex-grid">
  <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
    <ContentBox>
      <DabIpsum count={2} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
    <ContentBox>
      <DabIpsum count={3} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
    <ContentBox>
      <DabIpsum count={2} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
    <ContentBox>
      <DabIpsum count={1} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
    <ContentBox>
      <DabIpsum count={2} />
    </ContentBox>
  </Column>
  <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
    <ContentBox>
      <DabIpsum count={2} />
    </ContentBox>
  </Column>
</Row>
```
