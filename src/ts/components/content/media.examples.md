#### Example
##### Simple Media Object
```js
<ContentBox>
  <Media>
    <MediaFigure>
      <img src="/images/sample-image.png" />
    </MediaFigure>
    <MediaBody>
      <h5 className="margin-top-none">Header</h5>
      <DabIpsum count={2} />
    </MediaBody>
  </Media>
</ContentBox>
```

##### Small / Large Media Object
```js
<ContentBox>
  <Media>
    <MediaFigure small>
      <img src="/images/example-profile.png" />
    </MediaFigure>
    <MediaBody>
      <p className="margin-none"><strong>Janet Jones</strong><br/>Development Team - Brighton</p>
    </MediaBody>
  </Media>
</ContentBox>

<ContentBox>
  <Media>
    <MediaFigure large>
      <img src="/images/example-poster.jpg" />
    </MediaFigure>
    <MediaBody>
      <h5 className="margin-top-none">MCLINTOCK! (1963)</h5>
      <p><strong>Created by:</strong> <em>John Wayne</em></p>
      <p><strong>Starring:</strong> <em>John Wayne, Maureen O'Hara</em></p>
      <p><strong>Genre:</strong> <em>Western</em></p>
      <p>McLintock!, one of five films to feature the iconic partnership of John Wayne and Maureen O’Hara, is both a public domain film and the subject of an interesting public domain court case. </p>
    </MediaBody>
  </Media>
</ContentBox>
```

##### Reversed Media Object
```js
<ContentBox>
  <Media reversed>
    <MediaFigure>
      <img src="/images/sample-image.png" />
    </MediaFigure>
    <MediaBody>
      <h5 className="margin-top-none">Header</h5>
      <DabIpsum count={2} />
    </MediaBody>
  </Media>
</ContentBox>
```

##### Media Object (with centred image)
```js
<ContentBox>
  <Media>
    <MediaFigure centered>
      <img src="/images/sample-image.png" />
    </MediaFigure>
    <MediaBody>
      <h5 className="margin-top-none">Header</h5>
      <DabIpsum count={2} />
    </MediaBody>
  </Media>
</ContentBox>
```

##### Nested Media Objects
```js
<ContentBox>
  <Media>
    <MediaFigure>
      <img src="/images/sample-image.png" />
    </MediaFigure>
    <MediaBody>
      <h5 className="margin-top-none">Header</h5>
      <DabIpsum count={2} />
      <ContentBox>
        <Media>
          <MediaFigure>
            <img src="/images/sample-image.png" />
          </MediaFigure>
          <MediaBody>
            <h5 className="margin-top-none">Header</h5>
            <DabIpsum count={2} />
          </MediaBody>
        </Media>
      </ContentBox>
    </MediaBody>
  </Media>
</ContentBox>
```

#### Less variables
These are all the defaults in `variables.less` - only set if you want to change!
```less
@media-padding: @padding-large;
@media-size-small: 30px;
@media-size: 70px;
@media-size-large: 120px;
```
