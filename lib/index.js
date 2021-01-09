"use strict";

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

exports.__esModule = true;
exports.a = void 0;
var a = 1;
exports.a = a;
var arr = [1, 2, 3].map(function (n) {
  return n + 1;
});
[4, 5].forEach(function (n) {
  return n;
});

var Foo = function Foo() {// super()
};

var p = new Promise(function (resolve) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
