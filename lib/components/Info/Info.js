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

var Info =
/** @class */
function (_super) {
  __extends(Info, _super);

  function Info() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Info.prototype.render = function () {
    return React.createElement("span", null, "This is Info plugin. This plugin will manage information about page");
  };

  return Info;
}(React.Component);

export default Info;