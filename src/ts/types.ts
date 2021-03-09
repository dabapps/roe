export type IntrinsicElementType = keyof JSX.IntrinsicElements;

export type NoComponentProp<D extends IntrinsicElementType> = {
  /**
   * Set the component to render a different element type.
   */
  component?: undefined;
} & JSX.IntrinsicElements[D];

export type WithComponentProp<C extends IntrinsicElementType> = {
  /**
   * Set the component to render a different element type.
   */
  component: C;
} & JSX.IntrinsicElements[C];

export type OptionalComponentProp<C extends IntrinsicElementType> = {
  /**
   * Set the component to render a different element type.
   */
  component?: C;
} & JSX.IntrinsicElements[C];

export interface FunctionComponentOptionalComponentProp<
  D extends IntrinsicElementType,
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  E extends Record<string, any> = {}
> {
  (props: NoComponentProp<D> & E): React.ReactElement;
  <C extends IntrinsicElementType>(
    props: WithComponentProp<C> & E
  ): React.ReactElement;
}

export interface BaseTableCellProps extends ComponentProps {
  /**
   * Set an exact cell width.
   */
  width?: number | string;
}
