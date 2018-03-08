import * as React from 'react';
import { PureComponent } from 'react';
import {
  AppRoot,
  Button,
  Column,
  Container,
  ContentBox,
  ContentBoxFooter,
  ContentBoxHeader,
  DabIpsum,
  Footer,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  NavBar,
  Row,
  Section,
  Sidebar,
  SpacedGroup,
} from '../src/ts';
import NavItems from './nav-items';

interface AppState {
  sidebarOpen: boolean;
}

class App extends PureComponent<{}, AppState> {
  public constructor (props: {}) {
    super(props);

    this.state = {
      sidebarOpen: false
    };
  }

  public render () {
    return (
      <AppRoot>
        <NavBar shy>
          <Container>
            <h1 className="display-inline font-size-large">
              NavBar
            </h1>

            <NavItems className="float-right display-none md-display-block" />
          </Container>
        </NavBar>

        <Sidebar open position="right">
          <NavItems />
        </Sidebar>

        <Container>
          <h1>
            Example
          </h1>

          <DabIpsum />

          <Row>
            <Column>
              <InputGroup>
                <InputGroupAddon>
                  £
                </InputGroupAddon>
                <input type="number" />
              </InputGroup>
            </Column>
          </Row>

          <Row>
            <Column>
              <h2>
                Can't touch these
              </h2>

              <FormGroup block>
                <label>
                  Nope
                </label>
                <input type="text" disabled />
              </FormGroup>

              <SpacedGroup>
                <Button disabled>
                  Nope
                </Button>

                <Button className="disabled">
                  Also nope
                </Button>
              </SpacedGroup>
            </Column>
          </Row>

          <Row>
            <Column sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
              <ContentBox>
                <ContentBoxHeader>
                  <h2 className="font-size-large">
                    Login
                  </h2>
                </ContentBoxHeader>

                <FormGroup block>
                  <label>
                    Email
                  </label>
                  <input type="email" />
                </FormGroup>

                <FormGroup block>
                  <label>
                    Password
                  </label>
                  <input type="password" />
                </FormGroup>

                <p className="error">
                  Incorrect email or password
                </p>

                <ContentBoxFooter>
                  <SpacedGroup block className="margin-vertical-base">
                    <Button>
                      Forgot password
                    </Button>
                    <Button className="primary">
                      <span className="this-span-is-here-for-testing-purposes">
                        Login
                      </span>
                    </Button>
                  </SpacedGroup>
                </ContentBoxFooter>
              </ContentBox>
            </Column>
          </Row>

          <ContentBox>
            <ContentBoxHeader>
              <h2>
                Example
              </h2>
            </ContentBoxHeader>

            <Section>
              <Row>
                <Column sm={6} md={3}>
                  Column 1
                </Column>
                <Column sm={6} md={3}>
                  Column 1
                </Column>
                <Column sm={6} md={3}>
                  Column 1
                </Column>
                <Column sm={6} md={3}>
                  Column 1
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column sm={6} md={3}>
                  Column 1
                </Column>
                <Column sm={6} md={3}>
                  Column 1
                </Column>
                <Column sm={6} md={3}>
                  Column 1
                </Column>
                <Column sm={6} md={3}>
                  Column 1
                </Column>
              </Row>
            </Section>
          </ContentBox>
        </Container>

        <Footer sticky>
          <Container>
            <p>
              Footer
            </p>
          </Container>
        </Footer>
      </AppRoot>
    );
  }
}

export default App;
