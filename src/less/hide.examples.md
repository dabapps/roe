Used to change the css `display` property of an element on different screen sizes.

Available display types are: `none`, `block`, `inline`, and `inline-block`.

Note: `display-none` is an alias for `xs-display-none`, and `display-block` an alias for `xs-display-block`, etc.

#### Example

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
