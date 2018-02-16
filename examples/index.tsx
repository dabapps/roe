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
  NavBar,
  Row,
  Section,
  SpacedGroup,
} from '../src/ts';

const app = document.createElement('app');

document.body.appendChild(app);

ReactDOM.render(
  (
    <AppRoot>
      <NavBar shy>
        <Container>
          <h1 className="display-inline font-size-large">
            NavBar
          </h1>

          <SpacedGroup className="float-right">
            <Button>
              Login
            </Button>
          </SpacedGroup>
        </Container>
      </NavBar>

      <Container>
        <h1>
          Example
        </h1>

        <DabIpsum />

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

          <ContentBoxFooter>
            <SpacedGroup block className="padding-vertical-base">
              <Button>
                Cancel
              </Button>
              <Button className="primary">
                Submit
              </Button>
            </SpacedGroup>
          </ContentBoxFooter>
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
