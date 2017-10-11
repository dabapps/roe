import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface ModalProps extends HTMLProps<HTMLElement> {
  component?: string;
  scrollable?: boolean;
  small?: boolean;
  large?: boolean;
  fill?: boolean;
  onClickOutside(event: React.MouseEvent<HTMLDivElement>): void;
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
