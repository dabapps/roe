Used to change the css `float` property of an element on different screen sizes.

Note: float-left is an alias for `xs-float-left`, and `float-right` an alias for `xs-float-right`.

`float-none` & all size variations are also available.

#### Example

```js
<Row className="display-columns">
  <Column xs={6} className="xs-float-right sm-float-left md-float-right">
    float-right sm-float-left md-float-right
  </Column>
  <Column xs={6} className="xs-float-left sm-float-right md-float-left">
    float-left sm-float-right md-float-left
  </Column>
</Row>
```
