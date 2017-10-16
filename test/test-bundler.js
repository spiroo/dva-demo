import 'babel-polyfill';
import chai from 'chai';
// import { jsdom } from 'jsdom';
import { parse } from 'qs';
import { effects } from 'dva/saga';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.effects = effects;
global.parse = parse;
global.expect = chai.expect;
// global.jsdom = jsdom;
// global.document = jsdom('<!doctype html><html><body></body></html>');

function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.less'] = noop;
require.extensions['.png'] = noop;
