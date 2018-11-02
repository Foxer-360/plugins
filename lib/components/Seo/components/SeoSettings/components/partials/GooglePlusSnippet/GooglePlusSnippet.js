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

var GooglePlusSnippet =
/** @class */
function (_super) {
  __extends(GooglePlusSnippet, _super);

  function GooglePlusSnippet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  GooglePlusSnippet.prototype.render = function () {
    return React.createElement("div", {
      className: "c-googlePlusSnippet"
    }, React.createElement("div", {
      className: "c-googlePlusSnippet__inner"
    }, React.createElement("div", {
      className: "c-googlePlusSnippet__head"
    }, React.createElement("img", {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Google_plus_icon.svg"
    }), React.createElement("div", {
      className: "c-googlePlusSnippet__head__author"
    }, React.createElement("div", {
      className: "c-googlePlusSnippet__head__author__name"
    }, "Google+ user"), React.createElement("div", {
      className: "c-googlePlusSnippet__head__author__type"
    }, React.createElement("div", {
      className: "c-googlePlusSnippet__head__author__type__arrow"
    }, React.createElement("svg", {
      viewBox: "0 0 48 48",
      height: "100%",
      width: "100%"
    }, React.createElement("path", {
      d: "M20 14l10 10-10 10z"
    }))), "Ve\u0159ejn\xE9")), React.createElement("div", {
      className: "clearfix"
    })), React.createElement("div", {
      className: "c-googlePlusSnippet__entry"
    }, "Google+ user entry"), React.createElement("div", {
      className: "c-googlePlusSnippet__title"
    }, this.props.title)), React.createElement("div", {
      className: "c-googlePlusSnippet__image"
    }, React.createElement("img", {
      height: "100%",
      width: "100%",
      src: this.props.image
    })));
  };

  return GooglePlusSnippet;
}(React.Component);

export default GooglePlusSnippet;