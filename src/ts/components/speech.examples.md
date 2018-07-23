#### Example

Standard speech bubbles

```js
<Row>
  <Column className="margin-vertical-base">
    <Speech sent>
      <p>Hello</p>
    </Speech>
  </Column>
  <Column className="margin-vertical-base">
    <Speech received>
      <p>Hi</p>
    </Speech>
  </Column>
  <Column className="margin-vertical-base">
    <Speech sent>
      <DabIpsum count={2} />
    </Speech>
  </Column>
  <Column className="margin-vertical-base">
    <Speech received>
      <DabIpsum count={1} />
    </Speech>
  </Column>
</Row>
```

Block speech bubbles

```js
<Row>
  <Column className="margin-vertical-base">
    <Speech block sent>
      <p>Hello</p>
    </Speech>
  </Column>
  <Column className="margin-vertical-base">
    <Speech block received>
      <p>Hi</p>
    </Speech>
  </Column>
  <Column className="margin-vertical-base">
    <Speech block sent>
      <DabIpsum count={2} />
    </Speech>
  </Column>
  <Column className="margin-vertical-base">
    <Speech block received>
      <DabIpsum count={1} />
    </Speech>
  </Column>
</Row>
```

#### Less variables

```less
@speech-arrow-size: 10px;
@speech-border-radius: 10px;
@speech-text-color-default: @grey-dark;
@speech-border-default-received: @grey-light;
@speech-background-default-received: @grey-lightest;
@speech-border-default-sent: @success-light;
@speech-background-default-sent: @success-lighter;
```
