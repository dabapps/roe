### Less

Include Roe in your main `index.less` file. Do not use `./` or `../` in the path.

```less
@import 'node_modules/@dabapps/roe/src/less/index.less';
```

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
        Column 1
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
