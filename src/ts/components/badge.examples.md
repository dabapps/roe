#### Example

```js
<div>
  <p>
    <SpacedGroup block>
      <Badge>
        1.00
      </Badge>
      <Badge>
        Default
      </Badge>
      <Badge className="primary">
        Primary
      </Badge>
      <Badge className="secondary">
        Secondary
      </Badge>
      <Badge className="tertiary">
        Tertiary
      </Badge>
      <Badge className="info">
        Info
      </Badge>
      <Badge className="success">
        Success
      </Badge>
      <Badge className="warning">
        Warning
      </Badge>
      <Badge className="error">
        Error
      </Badge>
    </SpacedGroup>
  </p>
</div>
```

#### Less variables

```less
@badge-border-radius: @font-size-base * 2;
@badge-background-default: @grey-lighter;
@badge-text-color-light: @grey-lightest;
@badge-text-color-dark: @grey-dark;
```
