import * as chai from 'chai';
import * as chaiJestSnapshot from 'chai-jest-snapshot';
import * as sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.use(chaiJestSnapshot);

beforeEach(function () {
  chaiJestSnapshot.configureUsingMochaContext(this);
});
