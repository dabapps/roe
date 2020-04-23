import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentElement } from '../../types';
import InputGroup from '../forms/input-group';
import InputGroupAddon from '../forms/input-group-addon';

export type InputWithPrefixSuffixProps<
  T extends ComponentElement
> = JSX.IntrinsicElements['input'] & {
  /**
   * Set the component to render a different element type.
   */
  component?: T;
  /**
   * Content to display to the left of the input.
   */
  prefix?: React.ReactChild;
  /**
   * Content to display to the right of the input.
   */
  suffix?: React.ReactChild;
  /**
   * Set the style `display: block;` so the input group fills its parent.
   */
  block?: boolean;
  /**
   * Class name to apply to the input.
   */
  inputClassName?: string;
  /**
   * Class name to apply to the prefix.
   */
  prefixClassName?: string;
  /**
   * Class name to apply to the suffix.
   */
  suffixClassName?: string;
  value?: string | string[] | number; // Adds compatibility with React 15 and 16 types
};

/**
 * A precomposed Input containing an optional prefix (InputGroupAddon), an input,
 * and an optional suffix (InputGroupAddon).
 */
export class InputWithPrefixSuffix<
  T extends ComponentElement = 'div'
> extends PureComponent<InputWithPrefixSuffixProps<T>, {}> {
  public render() {
    const {
      prefix,
      suffix,
      block,
      className,
      inputClassName,
      prefixClassName,
      suffixClassName,
      component,
      ...remainingProps
    } = this.props;

    return (
      <InputGroup component={component} block={block} className={className}>
        {typeof prefix !== 'undefined' && (
          <InputGroupAddon className={prefixClassName}>
            {prefix}
          </InputGroupAddon>
        )}
        <input className={inputClassName} {...remainingProps} />
        {typeof suffix !== 'undefined' && (
          <InputGroupAddon className={suffixClassName}>
            {suffix}
          </InputGroupAddon>
        )}
      </InputGroup>
    );
  }
}

export default InputWithPrefixSuffix;
