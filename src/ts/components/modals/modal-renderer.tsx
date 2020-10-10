import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export interface ModalRendererProps extends HTMLProps<HTMLElement> {
  /**
   * Array of modals to be rendered.
   */
  modals: ReadonlyArray<React.ReactNode>;
}

const TIMEOUT = {
  appear: 300,
  enter: 300,
  exit: 200,
};

/**
 * Required to render modals.
 * Should be rendered in the root of your app.
 * See the [Modal](#modal) section for a full example.
 */
export class ModalRenderer extends PureComponent<ModalRendererProps, {}> {
  public render() {
    const { modals } = this.props;

    return (
      <TransitionGroup>
        {modals &&
          modals.map((modal, index) => (
            <CSSTransition
              key={index}
              classNames="modal-transition"
              timeout={TIMEOUT}
            >
              <div className="modal-container">{modal}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    );
  }
}

export default ModalRenderer;
