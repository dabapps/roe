import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {
  Button,
  Column,
  Container,
  Row
} from '../src/ts';

import { CookieBanner } from '../src/ts/components/banners/cookie-banner';

describe('CookieBanner', () => {

  it('should match snapshot and take required render prop', () => {
    const tree = renderer.create(
      <CookieBanner
        render={({ dismiss }) => (
          <Container>
            <Row>
              <Column xs={10}>
                <p>We use cookies! Roe is awesome</p>
              </Column>
              <Column xs={2}>
                <Button
                  onClick={dismiss}
                  className={'margin-top-base float-right'}
                >
                  Accept
                </Button>
              </Column>
            </Row>
          </Container>
        )}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <CookieBanner
        className="my-class"
        render={({ dismiss }) => (
          <Container>
            <Row>
              <Column xs={10}>
                <p>We use cookies! Roe is awesome</p>
              </Column>
              <Column xs={2}>
                <Button
                  onClick={dismiss}
                  className={'margin-top-base float-right'}
                >
                  Accept
                </Button>
              </Column>
            </Row>
          </Container>
        )}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional position prop', () => {
    const tree = renderer.create(
      <CookieBanner
        position={'top'}
        render={({ dismiss }) => (
          <Container>
            <Row>
              <Column xs={10}>
                <p>We use cookies! Roe is awesome</p>
              </Column>
              <Column xs={2}>
                <Button
                  onClick={dismiss}
                  className={'margin-top-base float-right'}
                >
                  Accept
                </Button>
              </Column>
            </Row>
          </Container>
        )}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should hide the banner on click', () => {

    const instance = enzyme.shallow(
      <CookieBanner
        render={({ dismiss }) => (
          <Button
            onClick={dismiss}
            className={'button'}
          >
            Accept
          </Button>
        )}
      />
    );

    expect(instance).toMatchSnapshot();

    instance.find('.button').simulate('click');
    expect(instance).toMatchSnapshot();
  });

});
