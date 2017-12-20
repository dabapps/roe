import * as React from 'react';

export interface ComponentProps {
  /**
   * Set the component to render a different element type.
   */
  component?: React.ReactType;
}

export interface BaseTableCellProps extends ComponentProps {
  /**
   * Set an exact cell width.
   */
  width?: number | string;
}
