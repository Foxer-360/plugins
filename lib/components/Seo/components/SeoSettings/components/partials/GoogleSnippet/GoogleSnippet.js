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

import React from 'react';

var GoogleSnippet =
/** @class */
function (_super) {
  __extends(GoogleSnippet, _super);

  function GoogleSnippet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  GoogleSnippet.prototype.render = function () {
    return React.createElement("div", {
      className: "c-googleSnippet"
    }, React.createElement("div", {
      className: "c-googleSnippet__title"
    }, React.createElement("a", {
      href: "#"
    }, this.props.title)), React.createElement("div", {
      className: "c-googleSnippet__url"
    }, this.props.url), React.createElement("div", {
      className: "c-googleSnippet__text"
    }, this.props.description));
  };

  return GoogleSnippet;
}(React.Component);

export default GoogleSnippet;