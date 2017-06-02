import * as classNames from 'classnames';
import { List } from 'immutable';
import * as React from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

interface IModalRendererProps {
  modals: List<React.ReactNode>;
  onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
}

export const ModalRenderer: React.SFC<IModalRendererProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    modals,
    onClickOutside
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
            <div className="modal-overlay" onClick={onClickOutside} />
            <div className="modal-position">
              {modal}
            </div>
          </div>
        ))
      }
    </CSSTransitionGroup>
  );
}

export const Modal: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames('modal', className)}>
      {children}
    </div>
  );
}

export const ModalHeader: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames('modal-header', className)}>
      {children}
    </div>
  );
}

export const ModalFooter: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames('modal-footer', className)}>
      {children}
    </div>
  );
}
