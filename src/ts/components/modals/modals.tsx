import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export interface ModalRendererProps extends HTMLProps<HTMLElement> {
  modals: React.ReactNode[];
}

export interface ModalProps extends HTMLProps<HTMLElement> {
  component?: string;
  scrollable?: boolean;
  small?: boolean;
  large?: boolean;
  fill?: boolean;
  onClickOutside(event: React.MouseEvent<HTMLDivElement>): void;
}

export interface ComponentProps {
  component?: string;
}

export type ModalContentProps = ComponentProps & HTMLProps<HTMLElement>;

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

export const Modal: StatelessComponent<ModalProps> = (props) => {
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

export const ModalHeader: StatelessComponent<ModalContentProps> = (props) => {
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

export const ModalBody: StatelessComponent<ModalContentProps> = (props) => {
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

export const ModalFooter: StatelessComponent<ModalContentProps> = (props) => {
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

export const ModalCloseIcon: StatelessComponent<ModalContentProps> = (props) => {
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
