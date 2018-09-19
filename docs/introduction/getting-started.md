### Less

#### Import Roe styles

Include Roe in your main `index.less` file. Do not use `./` or `../` in the path.

```less
@import 'node_modules/@dabapps/roe/src/less/index.less';
```

#### Initial styling

A good place to start when customizing Roe, rather than layering styles on top of the existing ones, is to create a variables.less file, import this from your main LESS file, copy the variables from [the variables section of the documentation](#variables), and tweak them as desired.

This will help avoid writing lots of custom LESS to override existing Roe styles, and there are a lot of existing variables to play around with.

### Components

All components are exported, named, at the root level.

```javascript static
import {
  Column,
  Container,
  Row
} from '@dabapps/roe';

const App = () => (
  <Container>
    <Row>
      <Column md={6}>
        Column 1
      </Column>
      <Column md={6}>
        Column 2
      </Column>
    </Row>
  </Container>
);
```

### Code Highlighting

If you want to use the `CodeBlock` component with code highlighting you will need to include `highlight.js` in your index.html (or bundle the styles if you prefer, the javascript must be globally available).

Highlight.js recommends this CDN.

```html static
<!-- Include this in your head tag -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github-gist.min.css">

<!-- Include this anywhere before your main javascript file -->
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
```
