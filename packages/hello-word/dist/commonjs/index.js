"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _helloWord = require("./hello-word");
Object.keys(_helloWord).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _helloWord[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _helloWord[key];
    }
  });
});
//# sourceMappingURL=index.js.map