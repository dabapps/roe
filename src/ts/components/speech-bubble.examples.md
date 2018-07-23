#### Example

Standard speech bubbles

```js
<div>
  <SpeechBubble tailPosition="right">
    <p>Hello</p>
  </SpeechBubble>
  <SpeechBubble className="primary">
    <p>Hi...?</p>
  </SpeechBubble>
  <SpeechBubble className="secondary">
    <p>Hey!</p>
  </SpeechBubble>
  <SpeechBubble tailPosition="right">
    <DabIpsum count={1} />
  </SpeechBubble>
  <SpeechBubble tailPosition="tertiary">
    <p>Wat?</p>
  </SpeechBubble>
</div>
```

Block speech bubbles

```js
<div>
  <SpeechBubble block className="info" tailPosition="right">
    <p>Hello</p>
  </SpeechBubble>
  <SpeechBubble block className="success">
    <p>Hi...?</p>
  </SpeechBubble>
  <SpeechBubble block className="error">
    <p>Hey!</p>
  </SpeechBubble>
  <SpeechBubble block className="warning" tailPosition="right">
    <DabIpsum count={1} />
  </SpeechBubble>
  <SpeechBubble block className="primary" tailPosition="primary">
    <p>Wat?</p>
  </SpeechBubble>
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
