Used to quickly change the css `position` property of elements.

Available values include: `static`, `relative`, `absolute`, and `fixed`.

#### Example

```js
<div className="position-relative padding-base display-divs atomic-position-example">
  <p>
    This is a container div relatively positioned for purpose of this demo
  </p>

  <div className="position-static padding-base">
    class <strong>position-static</strong>. static positioning means that this element
     is unpositioned. It is rendered where the element is by default according to the HTML.
      It's not participating in all the positioning fun.
  </div>

  <div className="position-relative padding-base">
    class <strong>position-relative</strong>. relative positioning means the element is
     positioned relative to itself. Without using
    the top, right, bottom, or left properties, it behaves like a static element.
     Try adding properties to move this element!
  </div>

  <div className="position-absolute padding-base">
    class <strong>position-absolute</strong>. absolute means positioned relative
     to its nearest positioned parent positioned element.
     It is now positioned relative to its nearest relative ancestor.
  </div>
</div>
```
