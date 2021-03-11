#### Example

Standard speech bubbles

```js
<div>
  <SpeechBubble
    header={<span className="info">5 minutes ago</span>}
    className="info"
    tailPosition="right"
  >
    <p>Hello</p>
  </SpeechBubble>
  <SpeechBubble
    header={
      <span>
        <strong>Username 1</strong> <span className="info">2 minutes ago</span>
      </span>
    }
  >
    <p>Question?</p>
  </SpeechBubble>
  <SpeechBubble>
    <p>...yeah?</p>
  </SpeechBubble>
  <SpeechBubble
    header={
      <span>
        <strong>Username 2</strong> <span className="info">1 minute ago</span>
      </span>
    }
  >
    <p>Okay</p>
  </SpeechBubble>
  <SpeechBubble
    header={<span className="info">Just now</span>}
    footer={<span className="info italic">Seen</span>}
    className="info"
    tailPosition="right"
  >
    <DabIpsum count={1} />
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
  <SpeechBubble block className="primary">
    <p>Wat?</p>
  </SpeechBubble>
</div>
```

#### Custom speech bubbles

A mixin is available that allows you to define custom speech bubble styles.
This should be applied within the selector (element / class) that you want to apply the speech bubble styles to.

```css
.speech-bubble {
  // You must use the mixin within the selectors you want the new class to apply to
  // This example will generate selectors for: '.speech-bubble.custom-name'
  .create-speech-bubble(
    custom-name,
    @background-color,
    @border-color,
    @text-color
  );
}
```

You can then use your custom speech bubbles by supplying the name you provided to the mixin as the class name.

```html
JSX
<SpeechBubble className="custom-name">
  <p>
    Custom
  </p>
</SpeechBubble>

HTML
<div class="speech-bubble custom-name left">
  <div class="bubble">
    <p>
      Custom
    </p>
    <div class="tail"></div>
  </div>
</div>
```

#### Less variables

```css
@speech-bubble-arrow-size: 10px;
@speech-bubble-border-radius: 10px;
@speech-bubble-background-default: @grey-lightest;
@speech-bubble-border-color-default: @grey-lighter;
@speech-bubble-text-color-default: @font-color-base;
@speech-bubble-max-width: 75%;
```
