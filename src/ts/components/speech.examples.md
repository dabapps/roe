#### Example

Standard speech bubbles

```js
<div>
  <Speech tailPosition="right">
    <p>Hello</p>
  </Speech>
  <Speech className="primary">
    <p>Hi...?</p>
  </Speech>
  <Speech className="secondary">
    <p>Hey!</p>
  </Speech>
  <Speech tailPosition="right">
    <DabIpsum count={1} />
  </Speech>
  <Speech tailPosition="tertiary">
    <p>Wat?</p>
  </Speech>
</div>
```

Block speech bubbles

```js
<div>
  <Speech block className="info" tailPosition="right">
    <p>Hello</p>
  </Speech>
  <Speech block className="success">
    <p>Hi...?</p>
  </Speech>
  <Speech block className="error">
    <p>Hey!</p>
  </Speech>
  <Speech block className="warning" tailPosition="right">
    <DabIpsum count={1} />
  </Speech>
  <Speech block className="primary" tailPosition="primary">
    <p>Wat?</p>
  </Speech>
</div>
```

#### Less variables

```less
@speech-bubble-arrow-size: 10px;
@speech-bubble-border-radius: 10px;
@speech-bubble-text-color-default: @font-color-base;
@speech-bubble-background-default: @grey-lightest;
@speech-bubble-border-color-default: @grey-lighter;
@speech-bubble-max-width: 75%;
```
