import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import InputGroup from '../forms/input-group';
import InputGroupAddon from '../forms/input-group-addon';
import { memoWithComponentProp } from '../../utils';

export interface InputWithPrefixSuffixProps {
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
  /**
   * Input type
   */
  type?: string;
  /**
   * Input value
   */
  value?: string | string[] | number;
  /**
   * Input change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A precomposed Input containing an optional prefix (InputGroupAddon), an input,
 * and an optional suffix (InputGroupAddon).
 */
const InputWithPrefixSuffix: FunctionComponentOptionalComponentProp<
  'div',
  InputWithPrefixSuffixProps
> = (props: OptionalComponentProp<'div'> & InputWithPrefixSuffixProps) => {
  const {
    prefix,
    suffix,
    block,
    className,
    inputClassName,
    prefixClassName,
    suffixClassName,
    component = 'div',
    type,
    value,
    onChange,
    ...remainingProps
  } = props;

  return (
    <InputGroup
      {...remainingProps}
      component={component}
      block={block}
      className={className}
    >
      {typeof prefix !== 'undefined' && (
        <InputGroupAddon className={prefixClassName}>{prefix}</InputGroupAddon>
      )}
      <input
        className={inputClassName}
        type={type}
        value={value}
        onChange={onChange}
      />
      {typeof suffix !== 'undefined' && (
        <InputGroupAddon className={suffixClassName}>{suffix}</InputGroupAddon>
      )}
    </InputGroup>
  );
};

export default memoWithComponentProp(InputWithPrefixSuffix);
