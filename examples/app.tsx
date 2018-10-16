import * as React from 'react';
import { PureComponent } from 'react';
import {
  Alert,
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
  SideBar,
  SpacedGroup,
  SpeechBubble,
} from '../src/ts';
import NavItems from './nav-items';

const X_CHAR = String.fromCharCode(215);
const MENU_CHAR = String.fromCharCode(9776);

interface AppState {
  sidebarOpen: boolean;
}

class App extends PureComponent<{}, AppState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };
  }

  public render() {
    return (
      <AppRoot>
        <NavBar shy>
          <Container>
            <h1 className="display-inline font-size-large">NavBar</h1>

            <NavItems className="float-right display-none md-display-block" />

            <Button
              className="primary float-right display-block md-display-none"
              onClick={this.showSidebar}
            >
              {MENU_CHAR}
            </Button>
          </Container>
        </NavBar>

        <SideBar
          open={this.state.sidebarOpen}
          onClickOutside={this.hideSidebar}
          position="right"
          className="display-block md-display-none"
        >
          <div className="margin-vertical-base">
            <Button className="primary" onClick={this.hideSidebar}>
              {X_CHAR}
            </Button>
          </div>
          <NavItems />
        </SideBar>

        <Container>
          <h1>Example</h1>

          <Row>
            <Column md={6}>
              <DabIpsum />
            </Column>
            <Column md={6}>
              <SpeechBubble
                header={<span className="info">5 minutes ago</span>}
                className="info"
                tailPosition="right"
              >
                <p>Hello</p>
              </SpeechBubble>
              <SpeechBubble
                header={
                  <span>
                    <strong>Username 1</strong>{' '}
                    <span className="info">2 minutes ago</span>
                  </span>
                }
              >
                <p>Question?</p>
              </SpeechBubble>
              <SpeechBubble>
                <p>...yeah?</p>
              </SpeechBubble>
              <SpeechBubble
                header={
                  <span>
                    <strong>Username 2</strong>{' '}
                    <span className="info">1 minute ago</span>
                  </span>
                }
              >
                <p>Okay</p>
              </SpeechBubble>
              <SpeechBubble
                header={<span className="info">Just now</span>}
                footer={<span className="info italic">Seen</span>}
                className="info"
                tailPosition="right"
              >
                <DabIpsum count={1} />
              </SpeechBubble>
            </Column>
          </Row>

          <Row>
            <Column>
              <InputGroup>
                <InputGroupAddon>£</InputGroupAddon>
                <input type="number" />
              </InputGroup>
            </Column>
          </Row>

          <Row className="flex-grid">
            <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
              <ContentBox>
                <DabIpsum count={2} />
              </ContentBox>
            </Column>
            <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
              <ContentBox>
                <DabIpsum count={3} />
              </ContentBox>
            </Column>
            <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
              <ContentBox>
                <DabIpsum count={2} />
              </ContentBox>
            </Column>
            <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
              <ContentBox>
                <DabIpsum count={1} />
              </ContentBox>
            </Column>
            <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
              <ContentBox>
                <DabIpsum count={2} />
              </ContentBox>
            </Column>
            <Column xs={12} sm={6} md={4} lg={3} className="display-flex">
              <ContentBox>
                <DabIpsum count={2} />
              </ContentBox>
            </Column>
          </Row>

          <Row>
            <Column>
              <h3>Definition List Styles</h3>
              <Row>
                <Column xs={12} sm={4}>
                  <h4>&lt;dl className="list"&gt;</h4>
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
                <Column xs={12} sm={4}>
                  <h4>&lt;dl className="stacked"&gt;</h4>
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
                <Column xs={12} sm={4}>
                  <h4>&lt;dl className="inline"&gt;</h4>
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
          </Row>

          <Row>
            <Column>
              <h2>Can't touch these</h2>

              <FormGroup block>
                <label>Nope</label>
                <input type="text" disabled />
              </FormGroup>

              <SpacedGroup>
                <Button disabled>Nope</Button>

                <Button className="disabled">Also nope</Button>
              </SpacedGroup>
            </Column>
          </Row>

          <Row>
            <Column sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
              <ContentBox>
                <ContentBoxHeader>
                  <h2 className="font-size-large">Login</h2>
                </ContentBoxHeader>

                <FormGroup block>
                  <label>Email</label>
                  <input type="email" />
                </FormGroup>

                <FormGroup block>
                  <label>Password</label>
                  <input type="password" />
                </FormGroup>

                <p className="error">Incorrect email or password</p>

                <ContentBoxFooter>
                  <SpacedGroup block className="margin-vertical-base">
                    <Button>Forgot password</Button>
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
              <h2>Example</h2>
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
            <p>Footer</p>
          </Container>
        </Footer>
      </AppRoot>
    );
  }

  private showSidebar = () => {
    this.setState({
      sidebarOpen: true,
    });
  };

  private hideSidebar = () => {
    this.setState({
      sidebarOpen: false,
    });
  };
}

export default App;
