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

var FacebookSnippet =
/** @class */
function (_super) {
  __extends(FacebookSnippet, _super);

  function FacebookSnippet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FacebookSnippet.prototype.render = function () {
    return React.createElement("div", {
      className: "c-facebookSnippet"
    }, React.createElement("div", {
      className: "c-facebookSnippet__image"
    }, React.createElement("img", {
      height: "100%",
      width: "100%",
      src: this.props.image
    })), React.createElement("div", {
      className: "c-facebookSnippet__content"
    }, React.createElement("div", {
      className: "c-facebookSnippet__content__title"
    }, this.props.title), React.createElement("div", {
      className: "c-facebookSnippet__content__text"
    }, this.props.description), React.createElement("div", {
      className: "c-facebookSnippet__content__author"
    }, this.props.url)));
  };

  return FacebookSnippet;
}(React.Component);

export default FacebookSnippet;