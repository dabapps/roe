#### Example

```js
<ContentBox>
  <p>Content</p>
  <ContentBoxFooter>
    <SpacedGroup block className="margin-vertical-large">
      <Button>Cancel</Button>
      <Button className="primary">Done</Button>
    </SpacedGroup>
  </ContentBoxFooter>
</ContentBox>
```

#### Less variables

```css
@content-box-footer-background: @content-box-header-background; // @primary-lightest;
@content-box-footer-border: @content-box-header-border; // 1px solid @primary-lighter;
```
