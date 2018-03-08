import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
  Nav,
  NavBar,
  NavItem,
  Row,
  Section,
  SpacedGroup,
} from '../src/ts';

const app = document.createElement('div');
app.className = 'app';

document.body.appendChild(app);

const NavItems = () => (
  <Nav className="float-right">
    <NavItem className="button">
      <a href="#">
        About
      </a>
    </NavItem>
    <NavItem className="button link">
      <a href="#">
        Contact
      </a>
    </NavItem>
    <NavItem className="button pill">
      <a href="#">
        Something
      </a>
    </NavItem>
    <NavItem className="button link pill">
      <a href="#">
        Login
      </a>
    </NavItem>
  </Nav>
);

ReactDOM.render(
  (
    <AppRoot>
      <NavBar shy>
        <Container>
          <h1 className="display-inline font-size-large">
            NavBar
          </h1>

          <NavItems />
        </Container>
      </NavBar>

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
  ),
  app
);
