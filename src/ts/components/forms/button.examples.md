#### Example

```js
<div>
  <SpacedGroup block>
    <Button>Default</Button>
    <Button className="primary">Primary</Button>
    <Button className="secondary">Secondary</Button>
    <Button className="tertiary">Tertiary</Button>
    <Button className="success">Success</Button>
    <Button className="warning">Warning</Button>
    <Button className="error">Error</Button>
    <Button className="info">Info</Button>
  </SpacedGroup>

  <SpacedGroup block className="margin-top-large">
    <Button className="hollow">Hollow</Button>
    <Button className="link">Link</Button>
    <Button className="pill">Pill</Button>
    <Button className="link pill">Link pill</Button>
    <Button className="hollow pill">Hollow pill</Button>
    <Button className="hollow link">Hollow link</Button>
    <Button className="hollow link pill secondary">
      Hollow link pill secondary
    </Button>
  </SpacedGroup>

  <SpacedGroup block className="margin-top-large">
    <Button block>Block</Button>
  </SpacedGroup>

  <SpacedGroup block className="margin-top-large">
    <Button small>Small</Button>
    <Button large>Large</Button>
  </SpacedGroup>
</div>
```

#### Custom buttons

A mixin is available that allows you to define custom button styles.
This should be applied within the selector (element / class) that you want to apply the button styles to.

Note: the background color is used for the text & border of hollow buttons.

```less
.button,
button {
  // You must use the mixin within the selectors you want the new class to apply to
  // This example will generate selectors for: '.button.custom-light' and 'button.custom-light'
  .create-button(custom-light, @white, @black);
}
```

You can then use your custom buttons by supplying the name you provided to the mixin as the class name.

```js
<ContentBox className="grey-background">
  <SpacedGroup block className="margin-vertical-base">
    <Button className="custom-light">Custom light</Button>

    <button className="custom-light hollow">Custom light hollow</button>
  </SpacedGroup>
</ContentBox>
```

#### Less variables

```less
@button-border-width: 2px;
@button-text-color-dark: @grey-dark;
@button-text-color-light: @grey-lightest;
@button-background-default: @grey-medium;
@button-background-hollow: transparent;
@button-border-radius: @border-radius-base;
@button-border-radius-pill: 100px;
@button-padding-vertical-base: @padding-base / 2;
@button-padding-vertical-large: @padding-large / 2;
@button-padding-vertical-small: @padding-small / 2;
@button-padding-horizontal-base: @padding-base;
@button-padding-horizontal-large: @padding-large;
@button-padding-horizontal-small: @padding-small;

@font-size-button: 1em;
@line-height-button: 1.3em;
@font-size-button-large: @font-size-large;
@line-height-button-large: @line-height-button;
@font-size-button-small: @font-size-small;
@line-height-button-small: @line-height-button;
```
