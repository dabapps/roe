#### Example

```js
<div>
  <InputGroup>
    <InputGroupAddon>
      $
    </InputGroupAddon>
    <input type="number" />
  </InputGroup>

  <InputGroup block>
    <InputGroupAddon>
      Prefix:
    </InputGroupAddon>
    <input type="number" />
    <InputGroupAddon>
      %
    </InputGroupAddon>
  </InputGroup>
</div>
```

#### Less variables

```less
@input-group-addon-background: @grey-lightest;

@input-border: @border-dark;
```
