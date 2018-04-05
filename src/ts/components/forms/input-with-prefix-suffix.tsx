import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
import { ComponentProps } from '../../types';
import InputGroup from './input-group';
import InputGroupAddon from './input-group-addon';

export interface InputWithPrefixSuffixProps extends ComponentProps {
  /**
   * prefix
   */
  prefix?: string;
  /**
   * suffix
   */
  suffix?: string;
  /**
   * input value
   */
  value: any;
  /**
   * is disabled
   */
  disabled?: boolean;
  /**
   * input type
   */
  type?: string;
  /**
   * on change function
   */
  onChange(): void;
}

export class InputWithPrefixSuffix extends PureComponent<InputWithPrefixSuffixProps, {}> {

  public render() {
    const {
      prefix,
      suffix,
      disabled,
      type,
      onChange,
      value,
    } = this.props;

    return (
      <InputGroup>
        {prefix && <InputGroupAddon>{prefix}</InputGroupAddon>}
        <input onChange={onChange} value={value} disabled={disabled} type={type} />
        {suffix && <InputGroupAddon>{suffix}</InputGroupAddon>}
      </InputGroup>
    );
  }
}

export default InputWithPrefixSuffix;
