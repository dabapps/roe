import * as React from 'react';

import {
  Anchor,
  CodeBlock,
  Column,
  ContentBox,
  Row,
  Section,
  Tab,
  Tabs,
} from '../../../src/ts';

interface IState {
  activeTab: number;
  tabs: number[];
}

class TabDemo extends React.Component<{}, IState> {
  public constructor (props: {}) {
    super(props);

    this.state = {
      activeTab: 1,
      tabs: [1, 2, 3],
    };
  }

  public render () {
    const {
      activeTab,
      tabs
    } = this.state;

    return (
      <Section>
        <Row>
          <Column>
            <h2>
              <Anchor>
                Tabs
              </Anchor>
            </h2>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>
              Demo
            </h3>
            <Tabs>
              {
                tabs.map((tab) => (
                  <Tab key={tab} active={tab === activeTab}>
                    <a onClick={() => this.onClickSetActiveTab(tab)}>
                      Tab {tab}
                    </a>
                  </Tab>
                ))
              }
            </Tabs>
            <ContentBox>
              <p>
                Content
              </p>
            </ContentBox>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>
              Code
            </h3>
            <CodeBlock language="javascript" name="JSX">
              {`
                <Tabs>
                  {
                    tabs.map((tab) => (
                      <Tab key={tab} active={tab === activeTab}>
                        <a onClick={() => this.onClickSetActiveTab(tab)}>
                          Tab {tab}
                        </a>
                      </Tab>
                    ))
                  }
                </Tabs>
                <ContentBox>
                  <p>
                    Content
                  </p>
                </ContentBox>
              `}
            </CodeBlock>
          </Column>
        </Row>
      </Section>
    );
  }

  private onClickSetActiveTab (tab: number) {
    this.setState({
      activeTab: tab
    });
  }
}

export default TabDemo;