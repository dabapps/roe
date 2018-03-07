#### Example

```js
class BannerExample extends React.Component {

  render () {

    retrun (
      <Banner open top>
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
    )
  }
}

<BannerExample />
```
