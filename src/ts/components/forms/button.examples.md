#### Example

```js
<div>
  <SpacedGroup block>
    <Button>
      Default
    </Button>
    <Button className="primary">
      Primary
    </Button>
    <Button className="secondary">
      Secondary
    </Button>
    <Button className="tertiary">
      Tertiary
    </Button>
    <Button className="success">
      Success
    </Button>
    <Button className="warning">
      Warning
    </Button>
    <Button className="error">
      Error
    </Button>
    <Button className="info">
      Info
    </Button>
  </SpacedGroup>

  <SpacedGroup block className="margin-top-large">
    <Button className="hollow">
      Hollow
    </Button>
    <Button className="link">
      Link
    </Button>
    <Button className="pill">
      Pill
    </Button>
    <Button className="link pill">
      Link pill
    </Button>
    <Button className="hollow pill">
      Hollow pill
    </Button>
    <Button className="hollow link">
      Hollow link
    </Button>
    <Button className="hollow link pill secondary">
      Hollow link pill secondary
    </Button>
  </SpacedGroup>

  <SpacedGroup block className="margin-top-large">
    <Button block>
      Block
    </Button>
  </SpacedGroup>

  <SpacedGroup block className="margin-top-large">
    <Button small>
      Small
    </Button>
    <Button large>
      Large
    </Button>
  </SpacedGroup>
</div>
```

#### Custom buttons

A mixin is available that allows you to define custom button styles.
This should be applied within the selector (element / class) that you want to apply the button styles to.

Note: the background color is used for the text & border of hollow buttons.

```less
button,
.button {
  // You must use the mixin within the selectors you want the new class to apply to
  // This example will generate selectors for: 'button.custom-name' and '.button.custom-name'
  .create-button(custom-name, @background, @color);
}
```

You can then use your custom buttons by supplying the name you provided the mixin as the class name.

```html
JSX
<Button className="custom-name">
  Custom
</Button>

HTML
<button class="custom-name">
  Custom
</button>
```

#### Less variables

```less
@button-border-width: 2px;
@button-text-color-dark: @grey-dark;
@button-text-color-light: @grey-lightest;
@button-background-default: @grey-lighter;

@font-size-button: 1em;
@line-height-button: 1.3em;
```
