import { joinClassNames } from '../utils';

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
      .toBe('i-exist i-concatenate i-have-spaces test test');
  });

});
