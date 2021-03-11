#### Example

```js
import { Row, Column } from '@dabapps/roe';

<div className="display-columns">
  <Row>
    <Column xs={12} md={4} mdOffset={2} lg={3} lgOffset={0}>
      Column 1
    </Column>
    <Column xs={12} md={4} mdFill={2} lg={3} lgFill={0}>
      Column 2
    </Column>
    <Column xs={12} md={4} mdOffset={2} lg={3} lgOffset={0} lgPush={3}>
      Column 3
    </Column>
    <Column xs={12} md={4} mdFill={2} lg={3} lgFill={0} lgPull={3}>
      Column 4
    </Column>
  </Row>
</div>;
```

#### Less variables

```css
@grid-divisions: 12;
@gutter-width: 30px;
```
