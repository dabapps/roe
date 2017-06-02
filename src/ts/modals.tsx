import * as classNames from 'classnames';
import * as React from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

interface IModalRendererProps {
  modals: React.ReactNode[];
}

export const ModalRenderer: React.SFC<IModalRendererProps & React.HTMLProps<HTMLDivElement>> = (props) => {
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
            <div className="modal-position">
              {modal}
            </div>
          </div>
        ))
      }
    </CSSTransitionGroup>
  );
}

interface IModalProps {
  onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
}

export const Modal: React.SFC<IModalProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    onClickOutside,
    ...remainingProps
  } = props;

  return (
    <div>
      <div className="modal-overlay" onClick={onClickOutside} />
      <div {...remainingProps} className={classNames('modal', className)}>
        {children}
      </div>
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

export const ModalCloseIcon: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames('modal-close-icon', className)}>
      {children}
    </div>
  );
}
