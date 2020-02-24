Used to align text on different screen sizes.

Note: `text-align-left` is an alias for `xs-text-align-left`, same for `right` and `center`.

#### Example

```js
<div className="display-paragraphs">
  <p className="text-align-left">
    <strong>text-align-left</strong>
  </p>
  <p className="text-align-center">
    <strong>text-align-center</strong>
  </p>
  <p className="text-align-right">
    <strong>text-align-right</strong>
  </p>
  <p className="xs-text-align-center sm-text-align-left">
    <strong>xs-text-align-center sm-text-align-left</strong> - centered on
    mobile, and left on larger screens
  </p>
  <p className="text-align-justify">
    <strong>text-align-justify</strong> - I'm justified. I fill the space
    exactly (except on the last line), even if I have to stretch a bit at times.
    Content spaces out such that as many blocks fit onto one line as possible.
  </p>
</div>
```
