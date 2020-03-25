#### Example

```js
const { Tab } = require('./tab');

<Tabs>
  <Tab active>
    <a>Tab 1</a>
  </Tab>
  <Tab>
    <a>Tab 2</a>
  </Tab>
  <Tab>
    <a>Tab 3</a>
  </Tab>
</Tabs>;
```

#### Less variables

```less
@tab-background: @grey-lightest;
@tab-active-background: @white;
@tab-border: @border-base;
```
