import * as chai from 'chai';
import * as chaiJestSnapshot from 'chai-jest-snapshot';
import { JSDOM } from 'jsdom';
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
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

(global as IGlobal).window = dom.window;
(global as IGlobal).document = dom.window.document;
