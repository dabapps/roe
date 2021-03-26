export type IntrinsicElementType =
  | 'a'
  | 'article'
  | 'aside'
  | 'blockquote'
  | 'button'
  | 'caption'
  | 'code'
  | 'dd'
  | 'div'
  | 'dl'
  | 'dt'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'label'
  | 'li'
  | 'main'
  | 'nav'
  | 'ol'
  | 'p'
  | 'pre'
  | 'section'
  | 'span'
  | 'strong'
  | 'table'
  | 'tbody'
  | 'td'
  | 'th'
  | 'thead'
  | 'tr'
  | 'ul';

export interface OptionalComponentPropAndHTMLAttributes
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * Set the component to render a different element type.
   */
  component?: IntrinsicElementType;
}

export interface TableCellPropsBase {
  /**
   * Set an exact cell width.
   */
  width?: number | string;
}
