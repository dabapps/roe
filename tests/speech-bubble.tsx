import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { SpeechBubble } from '../src/ts/';

describe('SpeechBubble', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <SpeechBubble>
        <p>I love kittens!</p>
      </SpeechBubble>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with tailPosition="right"', () => {
    const tree = renderer.create(
      <SpeechBubble tailPosition="right">
        <p>I love pugs!</p>
      </SpeechBubble>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should add "block" class when block prop is true', () => {
    const tree = renderer.create(
      <SpeechBubble block>
        <p>I love llamas!</p>
      </SpeechBubble>
    );

    expect(tree).toMatchSnapshot();
  });

  it('accept regular attributes', () => {
    const tree = renderer.create(
      <SpeechBubble className="primary">
        <p>I love sloths!</p>
      </SpeechBubble>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should display header content above the speech bubble', () => {
    const tree = renderer.create(
      <SpeechBubble
        header={
          <span>
            <strong>Username</strong> <span className="info">1 minute ago</span>
          </span>
        }
      >
        <p>I love things!</p>
      </SpeechBubble>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should display footer content below the speech bubble', () => {
    const tree = renderer.create(
      <SpeechBubble footer={<span className="info italic">Seen</span>}>
        <p>I love stuff!</p>
      </SpeechBubble>
    );

    expect(tree).toMatchSnapshot();
  });
});
