import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {
  Button,
  Column,
  Container,
  CookieBanner,
  CookieBannerRenderProps,
  Row,
} from '../src/ts';

describe('CookieBanner', () => {
  const TestComponent = ({ dismiss }: CookieBannerRenderProps) => (
    <Container>
      <Row>
        <Column xs={10}>
          <p>We use cookies! Roe is awesome</p>
        </Column>
        <Column xs={2}>
          <Button onClick={dismiss} className="margin-top-base float-right">
            Accept
          </Button>
        </Column>
      </Row>
    </Container>
  );

  it('should match snapshot and take required render prop', () => {
    const tree = renderer.create(<CookieBanner render={TestComponent} />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <CookieBanner className="my-class" render={TestComponent} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional position prop', () => {
    const tree = renderer.create(
      <CookieBanner position="top" render={TestComponent} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should hide the banner on click', () => {
    const instance = enzyme.mount(<CookieBanner render={TestComponent} />);

    expect(instance).toMatchSnapshot();

    instance
      .find('button')
      .first()
      .simulate('click');
    expect(instance).toMatchSnapshot();
  });
});
