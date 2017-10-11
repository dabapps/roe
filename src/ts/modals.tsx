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
  component?: string;
  scrollable?: boolean;
  small?: boolean;
  large?: boolean;
  fill?: boolean;
  onClickOutside(event: React.MouseEvent<HTMLDivElement>): void;
}

export interface IComponentProps {
  component?: string;
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
    component: Component = 'div',
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
        <Component className="modal">
          {children}
        </Component>
      </div>
    </div>
  );
}

export const ModalHeader: React.SFC<IComponentProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('modal-header', className)}>
      {children}
    </Component>
  );
}

export const ModalBody: React.SFC<IComponentProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('modal-body', className)}>
      {children}
    </Component>
  );
}

export const ModalFooter: React.SFC<IComponentProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('modal-footer', className)}>
      {children}
    </Component>
  );
}

export const ModalCloseIcon: React.SFC<IComponentProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('modal-close-icon', className)}>
      {children}
    </Component>
  );
}
