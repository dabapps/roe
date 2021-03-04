#### Inline

```js
<FormGroup>
  <label>Label</label>
  <input type="text" />
</FormGroup>
```

#### No Label

```js
<div>
  <FormGroup>
    <label>Label</label>
    <input type="text" />
  </FormGroup>
  <FormGroup noLabel>
    <input type="text" />
  </FormGroup>
  <FormGroup noLabel>
    <p>Info text</p>
  </FormGroup>
</div>
```

#### Block

```js
<FormGroup block>
  <label>Label</label>
  <select>
    <option>Option</option>
  </select>
</FormGroup>
```

#### Checkboxes and Radios

```js
<div>
  <FormGroup>
    <label>Label 1</label>
    <input type="radio" />
    <label>Label 2</label>
    <input type="radio" />
  </FormGroup>

  <FormGroup>
    <input type="checkbox" />
    <label>Label</label>
  </FormGroup>
</div>
```

#### Less variables

```less
@form-group-margin: @margin-large;
@form-group-label-margin: @margin-base;

@input-border: @border-dark;
@input-width: 200px;
@input-height: 32px;
@label-width: 100px;
@no-label-offset: @label-width + @margin-base;

@textarea-width: @input-width;
@textarea-height: @input-height * 2;

@checkbox-size: 16px;
@checkbox-background: @white;
@checkbox-border: @border-base;
@checkbox-active-background: @primary;
@checkbox-icon-background: @checkbox-background;
@checkbox-icon-border: 2px solid @checkbox-icon-background;
@checkbox-shadow: inset 0 1px 1.5px 0 rgba(0, 0, 0, 0.1);
@checkbox-border-radius: @border-radius-base * 2;
```
