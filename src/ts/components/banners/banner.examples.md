#### Example

```js static
<Banner
  open
  position="top"
>
  <Container>
    <Row>
      <Column xs={10}>
        <p>Roe Banner</p>
      </Column>
      <Column xs={2}>
        <Button
          className={'margin-top-base float-right'}
        >
          Click
      </Button>
      </Column>
    </Row>
  </Container>
</Banner>
```

#### Less variables

```less
@banner-background: @body-background;
@banner-border: @border-base;
@banner-height: auto;
```
