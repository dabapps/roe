Used to style definition lists.


#### Example

```js
<Row>
            <Column>
              <h3>Definition List Styles</h3>
              <Row>
                <Column xs={12} lg={4}>
                  <h4>className="list"</h4>
                  <dl className="list">
                    <dt>Felines</dt>
                    <dd>Tabby</dd>
                    <dt>
                      I'm a really really long label that probably will wrap
                    </dt>
                    <dd>
                      <DabIpsum component="text" />
                    </dd>
                    <dd>
                      <DabIpsum component="text" />
                    </dd>
                    <dt>Dogs</dt>
                    <dd>Lhasa Apso</dd>
                    <dd>Dalmation</dd>
                    <dd>Labrador</dd>
                  </dl>
                </Column>
                <Column xs={12} lg={4}>
                  <h4>className="stacked"</h4>
                  <dl className="stacked">
                    <dt>Felines</dt>
                    <dd>Tabby</dd>
                    <dt>
                      I'm a really really long label that probably will wrap
                    </dt>
                    <dd>
                      <DabIpsum component="text" />
                    </dd>
                    <dd>
                      <DabIpsum component="text" />
                    </dd>
                    <dt>Dogs</dt>
                    <dd>Lhasa Apso</dd>
                    <dd>Dalmation</dd>
                    <dd>Labrador</dd>
                  </dl>
                </Column>
                <Column xs={12} lg={4}>
                  <h4>className="inline"</h4>
                  <dl className="inline">
                    <dt>Felines</dt>
                    <dd>Tabby</dd>
                    <dd>Ginger</dd>
                    <dd>Persian</dd>
                  </dl>
                  <dl className="inline">
                    <dt>
                      I'm a really really long label that probably will wrap
                    </dt>
                    <dd>
                      <DabIpsum component="text" />
                    </dd>
                    <dd>
                      <DabIpsum component="text" />
                    </dd>
                  </dl>
                  <dl className="inline">
                    <dt>Dogs</dt>
                    <dd>Lhasa Apso</dd>
                    <dd>Dalmation</dd>
                    <dd>Labrador</dd>
                  </dl>
                  <Alert className="info">
                    <p>
                      DL lists are notoriously hard to style, so this is the
                      best you can do really, so assuming you have markup
                      control, use seperate DL lists for each group of DT/DDs
                    </p>
                  </Alert>
                </Column>
              </Row>
            </Column>
          </Row>```
