'use strict';

require('core-js/modules/es.array.for-each.js');

require('core-js/modules/es.array.map.js');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.a = void 0;

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var a = 1;
exports.a = a;
var arr = [1, 2, 3].map(function (n) {
  return n + 1;
});
var arr2 = [4, 5].forEach;

var Foo = function Foo() {
  // super()

  _classCallCheck(this, Foo);
};

function App() {
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement('div', null, '2ab')
  );
}
