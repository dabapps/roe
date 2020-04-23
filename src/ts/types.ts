type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ComponentElement =
  | 'div'
  | 'span'
  | 'strong'
  | 'p'
  | 'ul'
  | 'ol'
  | 'li'
  | 'main'
  | 'section'
  | 'aside'
  | 'footer'
  | 'nav'
  | 'button'
  | 'a'
  | 'table'
  | 'tbody'
  | 'thead'
  | 'tr'
  | 'th'
  | 'td';

export type ComponentAndHTMLProps<T extends ComponentElement> = Partial<
  Omit<JSX.IntrinsicElements[T], 'ref'>
> & {
  /**
   * Set the component to render a different element type.
   */
  component?: T;
};

export type BaseTableCellProps<
  T extends ComponentElement
> = ComponentAndHTMLProps<T> & {
  /**
   * Set an exact cell width.
   */
  width?: number | string;
};
