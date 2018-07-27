#### Example

```js static
  <Row>
    <Column>
      <Highlight
        open
        disabled
        backgroundColor="white"
      >
        <InputGroup>
          <InputGroupAddon>£</InputGroupAddon>
          <input type="number" />
        </InputGroup>
      </Highlight>
    </Column>
  </Row>
```

#### Less variables

```less
@highlight-z-index: 1300;
@highlight-animation-speed: 0.4s;
@highlight-background-color: rgba(0, 0, 0, 0.5);
```
