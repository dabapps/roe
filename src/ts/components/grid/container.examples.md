#### Example

```js
import { Container, Row, Column } from '@dabapps/roe';

<Container fluid>
  <Row>
    <Column>Content</Column>
  </Row>
</Container>;
```

#### Less variables

Note: the container must have the `solid` prop set to true in order to set the background color.

```css
@container-background: @white;

@grid-divisions: 12;
@gutter-width: 30px;
```
