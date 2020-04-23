export interface ComponentProps {
  /**
   * Set the component to render a different element type.
   */
  component?:
    | 'div'
    | 'span'
    | 'a'
    | 'p'
    | 'button'
    | 'footer'
    | 'main'
    | 'section'
    | 'aside'
    | 'li'
    | 'ul'
    | 'ol'
    | 'nav'
    | 'strong';
}

export interface BaseTableCellProps extends ComponentProps {
  /**
   * Set an exact cell width.
   */
  width?: number | string;
}
