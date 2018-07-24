import * as React from 'react';
import { PureComponent } from 'react';
import { ComponentProps } from '../../types';
import InputGroup from '../forms/input-group';
import InputGroupAddon from '../forms/input-group-addon';

export interface PrefixSuffixProps extends ComponentProps {
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
}

export type InputWithPrefixSuffixProps = React.HTMLAttributes<
  HTMLInputElement
> &
  PrefixSuffixProps;

  /**
 * A precomposed Input containing an optional prefix (InputGroupAddon), an input,
 * and an optional suffix (InputGroupAddon).
 */
export class InputWithPrefixSuffix extends PureComponent<
  InputWithPrefixSuffixProps,
  {}
> {
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
