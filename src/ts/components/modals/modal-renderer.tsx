import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export interface ModalRendererProps extends React.HTMLProps<HTMLDivElement> {
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
const ModalRenderer = (props: ModalRendererProps) => {
  const { modals } = props;

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
};

const ModalRendererMemo = React.memo(ModalRenderer);

export { ModalRendererMemo as ModalRenderer };

export default ModalRendererMemo;
