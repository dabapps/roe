import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { SpeechBubble } from '../src/ts/components/speech-bubble';

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
        <p>I love puggs!</p>
      </SpeechBubble>
    );

    expect(tree).toMatchSnapshot();
  });

  it('accept regular attributes', () => {
    const tree = renderer.create(
      <SpeechBubble className="primary">
        <p>I love puggs!</p>
      </SpeechBubble>
    );

    expect(tree).toMatchSnapshot();
  });
});
