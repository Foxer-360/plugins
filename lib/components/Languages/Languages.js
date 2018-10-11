var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

import * as React from 'react';

var Languages =
/** @class */
function (_super) {
  __extends(Languages, _super);

  function Languages() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Languages.prototype.render = function () {
    return React.createElement("span", null, "Nothing to show. This plugin automatically fill languages from website settings into components");
  };

  return Languages;
}(React.Component);

export default Languages;