import * as React from 'react';

import {
  Anchor,
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

const AtomicPosition = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          <Anchor>
            Atomic Position Classes
          </Anchor>
        </h2>
      </Column>
    </Row>
    <Row>
      <Column className="display-columns">
        <h3>
          Demo
        </h3>
        <div className="atomic-position-demo">
          <p>This is a container div relatively positioned for purpose of this demo</p>

          <div className="position-static">
            class <strong>position-static</strong>. static positioning means that this element is unpositioned. It is rendered where the element is by default according to the HTML. It's not participating in all the positioning fun.
          </div>
          <div className="position-relative">
            class <strong>position-relative</strong>. relative positioning means the element is positioned relative to itself. Without using
            the top, right, bottom, or left properties, it behaves like a static element. Try adding properties to
             move this element!
          </div>
          <div className="position-absolute">
            class <strong>position-absolute</strong>. absolute means positioned relative to its nearest positioned parent positioned
             element. It is now positioned relative to its nearest relative ancestor.
          </div>
        </div>
        <p>
          <strong>Note</strong>: all the padding and colour above was just part of the demo.
          There's also class <strong>.position-fixed</strong>, but not shown for this demo.
        </p>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="html" name="HTML">
          {`
            <div className="atomic-position-demo">
              <p>This is a container div relatively positioned for purpose of this demo</p>

              <div className="position-static">
                class <strong>position-static</strong>. static positioning means that this element is unpositioned. It is rendered where the element is by default according to the HTML. It's not participating in all the positioning fun.
              </div>

              <div className="position-relative">
                class <strong>position-relative</strong>. relative positioning means the element is positioned relative to itself. Without using
                the top, right, bottom, or left properties, it behaves like a static element. Try adding properties to
                 move this element!
              </div>

              <div className="position-absolute">
                class <strong>position-absolute</strong>. absolute means positioned relative to its nearest positioned parent positioned
                 element. It is now positioned relative to its nearest relative ancestor.
              </div>

            </div>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default AtomicPosition;
