import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export interface ModalRendererProps extends HTMLProps<HTMLElement> {
  /**
   * Array of modals to be rendered.
   */
  modals: React.ReactNode[];
}

/**
 * Required to render modals.
 * Should be rendered in the root of your app.
 * See the [Modal](#modal) section for a full example.
 */
export const ModalRenderer: StatelessComponent<ModalRendererProps> = (props) => {
  const {
    modals,
  } = props;

  return (
    <CSSTransitionGroup
      transitionName="modal-transition"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={200}
    >
      {
        modals && modals.map((modal, index) => (
          <div key={index} className="modal-container">
            {modal}
          </div>
        ))
      }
    </CSSTransitionGroup>
  );
}

export default ModalRenderer;
