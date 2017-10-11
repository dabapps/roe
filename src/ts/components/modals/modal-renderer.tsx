import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export interface ModalRendererProps extends HTMLProps<HTMLElement> {
  modals: React.ReactNode[];
}

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
