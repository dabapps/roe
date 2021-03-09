import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Banner, Button, Column, Container, Row } from '../src/ts';

describe('Banner', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Banner />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Banner className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional position prop', () => {
    const tree = renderer.create(<Banner position="top" />);

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional open prop', () => {
    const tree = renderer.create(<Banner open />);

    expect(tree).toMatchSnapshot();
  });

  it('should take a child component', () => {
    const tree = renderer.create(
      <Banner>
        <Container>
          <Row>
            <Column xs={10}>
              <p>Roe Banner</p>
            </Column>
            <Column xs={2}>
              <Button className={'margin-top-base float-right'}>Click</Button>
            </Column>
          </Row>
        </Container>
      </Banner>
    );

    expect(tree).toMatchSnapshot();
  });
});
