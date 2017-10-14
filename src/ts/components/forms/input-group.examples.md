#### Example

```js
<div>
  <InputGroup>
    <input type="number" />
    <Button component="div" tabIndex={0}>
      Done
    </Button>
  </InputGroup>

  <InputGroup block>
    <InputGroupAddon>
      $
    </InputGroupAddon>
    <input type="number" />
    <Button component="div" tabIndex={0}>
      Done
    </Button>
  </InputGroup>
</div>
```

Note: to use buttons within an `InputGroup` you must change the component to another tag (e.g. `component="div"`).

In order to have these buttons also get the click effect, they must be focusable. An easy way to achieve this is by giving them a `tabIndex`.
