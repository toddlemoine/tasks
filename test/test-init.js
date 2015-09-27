import chai, {
  expect,
  assert
}
from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import testdom from 'testdom';
import React from 'react';

chai.use(sinonChai);

global.expect = expect;
global.assert = assert;
global.sinon = sinon;
global.__DEV__ = true;

testdom('<!doctype html><html><body><main id="root"></main></body></html>');

global.window.localStorage = {
    getItem() { return '[]' },
    setItem() {}
};

global.React = React;

// ensure requiring css not to throw
require.extensions['.css'] = function() {
  return null;
};
require.extensions['.styl'] = function() {
  return null;
};
