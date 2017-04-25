import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import * as chaiJestSnapshot from 'chai-jest-snapshot';

/*
import jsdom from 'jsdom';
import mockery from 'mockery';

// Jsdom document & window
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// Add to global
global.document = doc; // eslint-disable-line no-undef
global.window = win; // eslint-disable-line no-undef

// Add window keys to global window
Object.keys(window).forEach((key) => {
  if (!(key in global)) { // eslint-disable-line no-undef
    global[key] = window[key]; // eslint-disable-line no-undef
  }
});
*/

chai.use(sinonChai);
chai.use(chaiJestSnapshot);

beforeEach(function () {
  chaiJestSnapshot.configureUsingMochaContext(this);
});

/*
mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false
});
*/
