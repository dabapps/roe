#### Example

```js
import {
  ContentBox,
  ContentBoxHeader,
  ContentBoxFooter,
  SpacedGroup,
  Button,
} from '@dabapps/roe';

<ContentBox>
  <ContentBoxHeader>
    <h5>Header</h5>
  </ContentBoxHeader>
  <p>Content</p>
  <ContentBoxFooter>
    <SpacedGroup block className="margin-vertical-large">
      <Button>Cancel</Button>
      <Button className="primary">Done</Button>
    </SpacedGroup>
  </ContentBoxFooter>
</ContentBox>;
```

#### Less variables

```css
@content-box-background: @white;
```
