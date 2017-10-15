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

#### Code Highlighting

If you want to use the CodeBlock component with code highlighting you will need to include highlight.js in your index.html, or bundle the styles if you prefer, but the javascript must be globally available.

Highlight.js recommends this CDN.

```html
<!-- Include this in your head tag -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github-gist.min.css">

<!-- Include this anywhere before your main javascript file -->
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
```
