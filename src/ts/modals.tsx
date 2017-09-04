import * as classNames from 'classnames';
import * as React from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export interface IModalRendererProps {
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
            {modal}
          </div>
        ))
      }
    </CSSTransitionGroup>
  );
}

export interface IModalProps {
  scrollable?: boolean;
  small?: boolean;
  large?: boolean;
  fill?: boolean;
  onClickOutside(event: React.MouseEvent<HTMLDivElement>): void;
}

export const Modal: React.SFC<IModalProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    onClickOutside,
    scrollable,
    small,
    large,
    fill,
    ...remainingProps
  } = props;

  const myClassNames = [
    'modal-position',
    scrollable ? 'scrollable' : null,
    small ? 'small' : null,
    large ? 'large' : null,
    fill ? 'fill' : null,
  ];

  return (
    <div>
      <div className="modal-overlay" onClick={onClickOutside} />
      <div {...remainingProps} className={classNames(myClassNames)}>
        <div className="modal">
          {children}
        </div>
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

export const ModalBody: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames('modal-body', className)}>
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
