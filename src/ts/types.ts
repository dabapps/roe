import { HTMLProps } from 'react';

export interface ComponentProps {
  /**
   * Set the component to render a different element type
   */
  component?: string;
}

export type ContentBoxProps = ComponentProps & HTMLProps<HTMLElement>;
export type ModalContentProps = ComponentProps & HTMLProps<HTMLElement>;
export type TableSectionProps = ComponentProps & HTMLProps<HTMLElement>;

export interface BaseTableCellProps extends ComponentProps {
  /**
   * Set the cell width
   */
  width?: number | string;
}
