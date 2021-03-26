#### Example

```js static
<CookieBanner
  position="top"
  render={({ dismiss }) => (
    <Container>
      <Row>
        <Column xs={10}>
          <p>We use cookies! Roe is awesome</p>
        </Column>
        <Column xs={2}>
          <Button onClick={dismiss} className="margin-top-base float-right">
            Accept
          </Button>
        </Column>
      </Row>
    </Container>
  )}
/>
```

#### Less variables

```css
@banner-background: @body-background;
@banner-border: @border-base;
@banner-height: auto;
```
