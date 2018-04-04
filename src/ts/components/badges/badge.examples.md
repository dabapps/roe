#### Example

```js
<div>
  <p>
    <SpacedGroup block>
      <Badge>
        1
      </Badge>
      <Badge>
        default
      </Badge>
      <Badge className="primary">
        primary
      </Badge>
      <Badge className="secondary">
        secondary
      </Badge>
      <Badge className="tertiary">
        tertiary
      </Badge>
      <Badge className="info">
        info
      </Badge>
      <Badge className="success">
        success
      </Badge>
      <Badge className="warning">
        warning
      </Badge>
      <Badge className="error">
        error
      </Badge>
    </SpacedGroup>
  </p>
</div>
```

#### Less variables

```less
@badge-border-radius: 22px;
@badge-background-default: @grey-lighter;
@badge-text-color-light: @grey-lightest;
@badge-text-color-dark: @grey-dark;
```
