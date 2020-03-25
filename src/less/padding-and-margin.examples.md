Used to adjust the quickly adjust an element's padding.

You can set padding for all sides; `left`, `right`, `top`, or `bottom`; or all `vertical` / `horizontal` sides.

#### Examples

```js
<div className="display-divs">
  <div className="padding-base">
    <strong>padding-base</strong>
  </div>
  <div className="md-padding-left-large">
    <strong>md-padding-left-large</strong> - large padding left on medium
    screens and above
  </div>
  <div className="margin-left-base md-margin-left-none">
    <strong>margin-left-base md-margin-left-none</strong> - margin left only
    only small screens
  </div>
  <div className="margin-vertical-small">
    <strong>margin-vertical-small</strong>
  </div>
  <div className="margin-horizontal-large">
    <strong>margin-horizontal-large</strong>
  </div>
  <div
    style={{ width: 300 }}
    className="margin-vertical-none margin-horizontal-auto"
  >
    margin-vertical-none margin-horizontal-auto
  </div>
</div>
```
