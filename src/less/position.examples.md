Used to quickly change the css `position` property of elements.

Available values include: `static`, `relative`, `absolute`, and `fixed`.

#### Example

```js
<div className="position-relative display-divs atomic-position-example">
  <div className="position-static padding-base">
    <strong>position-static</strong> - this element is unpositioned. It is
    rendered where the element is by default according to the HTML. It's not
    participating in all the positioning fun.
  </div>

  <div className="position-relative padding-base">
    <strong>position-relative</strong> - the element is positioned relative to
    itself. Without using the top, right, bottom, or left properties, it behaves
    like a static element. Try adding properties to move this element!
  </div>

  <div className="position-absolute padding-base">
    <strong>position-absolute</strong> - positioned relative to its nearest
    positioned parent element. It is now positioned relative to its nearest
    relative ancestor.
  </div>
</div>
```
