#### Example

Note: for buttons to render correctly you must set their `component` prop to something else e.g. `"div"`.

```js
import { InputGroup, Button, InputGroupAddon } from '@dabapps/roe';

<div>
  <InputGroup>
    <input type="number" />
    <Button component="div" tabIndex={0}>
      Done
    </Button>
  </InputGroup>

  <InputGroup block>
    <InputGroupAddon>$</InputGroupAddon>
    <input type="number" />
    <Button component="div" tabIndex={0}>
      Done
    </Button>
  </InputGroup>

  <InputGroup>
    <Button component="div" tabIndex={0}>
      1
    </Button>
    <Button component="div" tabIndex={0}>
      2
    </Button>
    <Button component="div" tabIndex={0}>
      3
    </Button>
    <Button component="div" tabIndex={0}>
      4
    </Button>
  </InputGroup>
</div>;
```

Note: to use buttons within an `InputGroup` you must change the component to another tag (e.g. `component="div"`).

In order to have these buttons also get the click effect, they must be focusable. An easy way to achieve this is by giving them a `tabIndex`.

#### Less variables

```css
@input-group-addon-background: @grey-lightest;

@input-border: @border-dark;
```
