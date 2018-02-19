#### Example

Note: you **MUST** apply the "app" class to the element where your AppRoot will be rendered.

```html static
<html>
  <body>
    <div id="app" class="app"></div>
  </body>
</html>
```

```js static
ReactDOM.render(
  <AppRoot>
    <NavBar shy>
      <Container>
        NavBar
      </Container>
    </NavBar>

    <Container>
      <h1>
        Content
      </h1>
    </Container>

    <Footer sticky>
      <Container>
        Footer
      </Container>
    </Footer>
  </AppRoot>,
  document.getElementById('app')
);
```
