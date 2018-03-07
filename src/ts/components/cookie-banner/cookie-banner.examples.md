#### Example

```js
class CookieBannerExample extends React.Component {

  render () {

    retrun (
      <CookieBanner
        render={({dismiss}) => (
          <Container>
            <Row>
              <Column xs={10}>
                <p>Roe Cookie Banner</p>
              </Column>
              <Column xs={2}>
                <Button
                  onClick={dismiss}
                  className={'margin-top-base float-right'}
                >
                  Accept
                </Button>
              </Column>
            </Row>
          </Container>
        )}
      />
    )
  }
}

<CookieBannerExample />
```
