import * as chai from 'chai';
import * as chaiJestSnapshot from 'chai-jest-snapshot';
import * as jsdom from 'jsdom';
import * as sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.use(chaiJestSnapshot);

beforeEach(function () {
  chaiJestSnapshot.configureUsingMochaContext(this);
});

interface IGlobal extends NodeJS.Global {
  document: Document;
  window: Window;
}

// Jsdom document & window
(global as IGlobal).document = jsdom.jsdom('<!doctype html><html><body></body></html>');
(global as IGlobal).window = (global as IGlobal).document.defaultView;

// Add window keys to global window
// Object.keys(window).forEach((key: string) => {
//   if (!(key in global)) {
//     const value: any = window[key];
//     global[key] = value;
//   }
// });
