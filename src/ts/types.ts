import { HTMLProps } from 'react';

export interface ComponentProps {
  component?: string;
}

export interface ContentBoxProps extends HTMLProps<HTMLElement> {
  component?: string;
}

export type ModalContentProps = ComponentProps & HTMLProps<HTMLElement>;

export interface BaseTableCellProps extends ComponentProps {
  width?: number | string;
}

export type TableSectionProps = ComponentProps & HTMLProps<HTMLElement>;
