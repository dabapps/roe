import * as React from 'react';

import {
  Alert,
  AppRoot,
  Button,
  Collapse,
  Column,
  Container,
  ContentBox,
  ContentBoxFooter,
  ContentBoxHeader,
  DabIpsum,
  Footer,
  FormGroup,
  Highlight,
  InputGroup,
  InputGroupAddon,
  ModalRenderer,
  NavBar,
  Pagination,
  Row,
  Section,
  SideBar,
  SpacedGroup,
  SpeechBubble,
} from '../src/ts';
import ExampleModal from './modal';
import NavItems from './nav-items';

const X_CHAR = String.fromCharCode(215);
const MENU_CHAR = String.fromCharCode(9776);
const PAGINATION_PROPS = {
  pageSize: 10,
  itemCount: 123,
};

type UnknownProps = Record<string, unknown>;

interface AppState {
  sidebarOpen: boolean;
  highlightActive: boolean;
  modals: ReadonlyArray<React.ReactElement<UnknownProps>>;
  collapseOpen: boolean;
  currentPageNumber: number;
}

class App extends React.PureComponent<UnknownProps, AppState> {
  public constructor(props: UnknownProps) {
    super(props);

    this.state = {
      sidebarOpen: false,
      highlightActive: false,
      modals: [],
      collapseOpen: false,
      currentPageNumber: 1,
    };
  }

  public render(): React.ReactElement {
    return (
      <AppRoot>
        <NavBar shy>
          <Container>
            <h1 className="display-inline font-size-large">NavBar</h1>

            <NavItems className="float-right display-none md-display-block" />

            <Button
              className="primary float-right display-block md-display-none"
              onClick={this.onClickShowSideBar}
            >
              {MENU_CHAR}
            </Button>
          </Container>
        </NavBar>

        <SideBar
          open={this.state.sidebarOpen}
          onClickOutside={this.onClickHideSideBar}
          position="right"
          className="display-block md-display-none"
        >
          <div className="margin-vertical-base">
            <Button className="primary" onClick={this.onClickHideSideBar}>
              {X_CHAR}
            </Button>
          </div>
          <NavItems />
        </SideBar>

        <Container>
          <h1>Example</h1>

          <Row>
            <Column>
              <Button className="pill">Pill</Button>
              <Button className="hollow">Hollow</Button>
              <Button className="hollow pill">Hollow pill</Button>
              <Button className="hollow primary">Hollow primary</Button>
              <Button className="hollow pill secondary">
                Hollow pill secondary
              </Button>
            </Column>
            <Column>
              <Button className="small pill">Small pill</Button>
              <Button className="small hollow">Small hollow</Button>
              <Button className="small hollow pill">Small hollow pill</Button>
              <Button className="small hollow primary">
                Small hollow primary
              </Button>
              <Button className="small hollow pill secondary">
                Small hollow pill secondary
              </Button>
            </Column>
            <Column>
              <Button className="large pill">Large pill</Button>
              <Button className="large hollow">Large hollow</Button>
              <Button className="large hollow pill">Large hollow pill</Button>
              <Button className="large hollow primary">
                Large hollow primary
              </Button>
              <Button className="large hollow pill secondary">
                Large hollow pill secondary
              </Button>
            </Column>
          </Row>

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

          <ContentBox>
            <Button
              className="margin-vertical-large primary"
              onClick={this.onClickOpenModal}
            >
              Open example modal
            </Button>

            <ModalRenderer modals={this.state.modals} />
          </ContentBox>

          <Highlight open={this.state.highlightActive}>
            <ContentBox>
              <Button
                className="margin-vertical-large primary"
                onClick={this.onClickToggleHighlight}
              >
                {this.state.highlightActive ? 'Un-highlight' : 'Highlight'}
                {' this box'}
              </Button>

              <ModalRenderer modals={this.state.modals} />
            </ContentBox>
          </Highlight>

          <ContentBox>
            <Collapse open={this.state.collapseOpen} minHeight={100} fadeOut>
              <p className="text-align-right">
                <a onClick={this.onClickToggleCollapse}>
                  {this.state.collapseOpen ? 'Collapse' : 'Expand'}
                </a>
              </p>
              <DabIpsum count={5} />
            </Collapse>
          </ContentBox>

          <ContentBox>
            <Pagination
              {...PAGINATION_PROPS}
              currentPageNumber={this.state.currentPageNumber}
              changePage={this.changePage}
            />
          </ContentBox>
        </Container>

        <Footer fixed>
          <Container>
            <p>Footer</p>
            <p>
              This is a really long sentence that should wrap onto multiple
              lines when the page is resized.
            </p>
          </Container>
        </Footer>
      </AppRoot>
    );
  }

  private onClickToggleCollapse = () => {
    this.setState(({ collapseOpen }) => ({
      collapseOpen: !collapseOpen,
    }));
  };

  private onClickShowSideBar = () => {
    this.setState({
      sidebarOpen: true,
    });
  };

  private onClickHideSideBar = () => {
    this.setState({
      sidebarOpen: false,
    });
  };

  private onClickToggleHighlight = () => {
    this.setState(state => ({
      ...state,
      highlightActive: !state.highlightActive,
    }));
  };

  private onClickOpenModal = () => {
    this.setState(state => ({
      ...state,
      modals: [
        ...state.modals,
        <ExampleModal
          key={state.modals.length}
          onClickClose={this.onClickCloseModal}
        />,
      ],
    }));
  };

  private onClickCloseModal = () => {
    this.setState(state => {
      const modalsCopy = [...state.modals];
      modalsCopy.pop();

      return {
        ...state,
        modals: modalsCopy,
      };
    });
  };

  private changePage = (page: number) => {
    this.setState({
      currentPageNumber: page,
    });
  };
}

export default App;
