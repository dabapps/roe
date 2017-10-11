import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export interface ModalRendererProps extends HTMLProps<HTMLDivElement> {
  modals: React.ReactNode[];
}

export interface ModalProps extends HTMLProps<HTMLDivElement> {
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

export type ModalContentProps = ComponentProps & HTMLProps<HTMLDivElement>;

export class ModalRenderer extends PureComponent<ModalRendererProps, void> {
  public render () {
    const {
      modals,
    } = this.props;

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
}

// tslint:disable-next-line:max-classes-per-file
export class Modal extends PureComponent<ModalProps, void> {
  public render () {
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
    } = this.props;

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
}

// tslint:disable-next-line:max-classes-per-file
export class ModalHeader extends PureComponent<ModalContentProps, void> {
  public render () {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('modal-header', className)}>
        {children}
      </Component>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalBody extends PureComponent<ModalContentProps, void> {
  public render () {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('modal-body', className)}>
        {children}
      </Component>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalFooter extends PureComponent<ModalContentProps, void> {
  public render () {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('modal-footer', className)}>
        {children}
      </Component>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalCloseIcon extends PureComponent<ModalContentProps, void> {
  public render () {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('modal-close-icon', className)}>
        {children}
      </Component>
    );
  }
}
