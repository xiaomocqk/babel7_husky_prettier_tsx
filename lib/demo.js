"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const a = 1;
exports.a = a;
const arr = [1, 2, 3].map(n => n + 1)[(4, 5)].forEach(n => n);

class Foo {
  constructor() {// super()
  }

}

const p = new Promise(resolve => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "this is a paragraph"));
}
