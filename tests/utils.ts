import { expect } from 'chai';
import { joinClassNames } from '../src/ts/utils';

describe('utils', () => {

  it('should join class names', () => {
    expect(joinClassNames([
      'i-exist',
      'i-concatenate',
      undefined,
      '  i-have-spaces    ',
      null,
      'test',
      '',
      false,
      'test'
    ]))
      .to.equal('i-exist i-concatenate i-have-spaces test test');
  });

});
