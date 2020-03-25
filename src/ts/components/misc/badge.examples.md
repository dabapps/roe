#### Example

```js
<SpacedGroup block>
  <Badge>1.00</Badge>
  <Badge>Default</Badge>
  <Badge className="primary">Primary</Badge>
  <Badge className="secondary">Secondary</Badge>
  <Badge className="tertiary">Tertiary</Badge>
  <Badge className="info">Info</Badge>
  <Badge className="success">Success</Badge>
  <Badge className="warning">Warning</Badge>
  <Badge className="error">Error</Badge>
</SpacedGroup>
```

#### Less variables

```less
@badge-font-size: @font-size-small;
@badge-line-height: 1.5;
@badge-border-radius: unit(@badge-line-height / 2, em);
@badge-background-default: @grey-lighter;
@badge-text-color-light: @grey-lightest;
@badge-text-color-dark: @grey-dark;
```
