#### Example

```js
<div>
  <FormGroup>
    <label>
      Label
    </label>
    <input type="text" />
  </FormGroup>

  <FormGroup block>
    <label>
      Label
    </label>
    <select>
      <option>
        Option
      </option>
    </select>
  </FormGroup>

  <FormGroup>
    <label>
      Label
    </label>
    <input type="checkbox" />
  </FormGroup>

  <FormGroup>
    <input type="checkbox" />
    <label>
      Label
    </label>
  </FormGroup>
</div>
```

#### Less variables

```less
@input-width: 200px;
@input-height: 32px;
@label-width: 100px;

@textarea-width: @input-width;
@textarea-height: @input-height * 2;

@checkbox-size: 16px;
@checkbox-background: @white;
@checkbox-border: @border-base;
@checkbox-active-background: @primary;
@checkbox-icon-background: @checkbox-background;
@checkbox-icon-border: 2px solid @checkbox-icon-background;
@checkbox-shadow: inset 0 1px 1.5px 0 rgba(0, 0, 0, 0.1);
```
