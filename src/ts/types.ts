import { HTMLProps } from 'react';

export interface ComponentProps {
  component?: string;
}

export interface ContentBoxProps extends HTMLProps<HTMLElement> {
  component?: string;
}
