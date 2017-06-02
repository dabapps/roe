import * as React from 'react';

import {
  CodeBlock,
  Column,
  ContentBox,
  ContentBoxHeader,
  Row,
  Section,
  Tab,
  Tabs,
  Well
} from '../../../src/ts';

interface IState {
  activeTab: number;
  tabs: number[];
}

export class TabDemo extends React.Component<{}, IState> {
  public constructor (props: {}) {
    super(props);

    this.state = {
      activeTab: 1,
      tabs: [1, 2, 3],
    };
  }

  public onClickSetActiveTab (tab: number) {
    this.setState({
      activeTab: tab
    });
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
              Tabs
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
            <CodeBlock language="javascript">
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
              `}
            </CodeBlock>
          </Column>
        </Row>
      </Section>
    );
  }
}
