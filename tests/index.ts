import { expect } from 'chai';
import * as index from '../src/ts/';

describe('index file', () => {

  it('should export some components', () => {
    const keys = Object.keys(index);

    expect(keys.length).to.be.above(0);
  });

});
