export interface ComponentProps {
  /**
   * Set the component to render a different element type.
   */
  component?: string;
}

export interface BaseTableCellProps extends ComponentProps {
  /**
   * Set an exact cell width.
   */
  width?: number | string;
}
