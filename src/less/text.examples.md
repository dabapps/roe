#### Example

```js
<div>
  <p className="font-size-h1">font-size-h1</p>

  <h3 className="font-size-base">
    <SpacedGroup block>
      <span>font-size-base</span>
      <span className="font-size-small">
        font-size-small (relative to parent)
      </span>
      <span className="font-size-large">
        font-size-large (relative to parent)
      </span>
    </SpacedGroup>
  </h3>

  <SpacedGroup block className="margin-vertical-base">
    <span className="bold">bold</span>
    <span className="italic">italic</span>
    <span className="bold italic">bold italic</span>
    <span className="underlined">underlined</span>
  </SpacedGroup>

  <SpacedGroup block className="margin-vertical-base">
    <span className="primary">primary</span>
    <span className="secondary">secondary</span>
    <span className="tertiary">tertiary</span>
    <span className="info">info</span>
    <span className="success">success</span>
    <span className="warning">warning</span>
    <span className="error">error</span>
  </SpacedGroup>
</div>
```
