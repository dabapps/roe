#### Example

```js
<div>
  <CodeBlock language="javascript">
    {`
    function example () {
      console.log('Hello, World!');
    }
    `}
  </CodeBlock>

  <CodeBlock language="javascript" codeBlockName="example.js">
    {`const exampleWithName = this;`}
  </CodeBlock>
</div>
```

#### Less variables

```less
@code-block-background: @grey-lightest;
@code-block-name-background: contrast(@code-block-background, darken(@code-block-background, 5%), lighten(@code-block-background, 5%)); // lesshint maxCharPerLine: false
@code-block-border: @border-base;
```
