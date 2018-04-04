#### Example

```js
<div>
  <p>
    <SpacedGroup block>
      <Badge small className="primary">
        primary
      </Badge>
      <Badge small className="secondary">
        secondary
      </Badge>
      <Badge small className="tertiary">
        tertiary
      </Badge>
      <Badge small className="info">
        info
      </Badge>
      <Badge small className="success">
        success
      </Badge>
      <Badge small className="warning">
        warning
      </Badge>
      <Badge small className="error">
        error
      </Badge>
    </SpacedGroup>
  </p>
  <p>
    <SpacedGroup block>
      <Badge small>
        default
      </Badge>
      <Badge large>
        large
      </Badge>
    </SpacedGroup>
  </p>
</div>
```

#### Less variables

```less
@badge-border-radius: 22px;
@badge-min-width: 20px;
@badge-background-default: @grey-lighter;
@badge-text-color-light: @grey-lightest;
@badge-text-color-dark: @grey-dark;
```
