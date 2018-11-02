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

var TwitterSnippet =
/** @class */
function (_super) {
  __extends(TwitterSnippet, _super);

  function TwitterSnippet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TwitterSnippet.prototype.render = function () {
    return React.createElement("div", {
      className: "c-twitterSnippet"
    }, React.createElement("div", {
      className: "c-twitterSnippet__head"
    }, React.createElement("div", {
      className: "c-twitterSnippet__head__avatar"
    }, React.createElement("img", {
      src: "https://www.telefonica.com/telefonica-theme/images/custom/social/twitter_followus.png"
    })), React.createElement("div", {
      className: "c-twitterSnippet__head__author"
    }, React.createElement("div", {
      className: "c-twitterSnippet__head__author__name"
    }, "Twitter user"), React.createElement("div", {
      className: "c-twitterSnippet__head__author__screenName"
    }, "@TwitterUser")), React.createElement("div", {
      className: "clearfix"
    })), React.createElement("div", {
      className: "c-twitterSnippet__title"
    }, "Twitter user entry"), React.createElement("div", {
      className: "c-twitterSnippet__content"
    }, React.createElement("div", {
      className: "c-twitterSnippet__content__image"
    }, React.createElement("img", {
      height: "100%",
      width: "100%",
      src: this.props.image
    })), React.createElement("div", {
      className: "c-twitterSnippet__content__inner"
    }, React.createElement("div", {
      className: "c-twitterSnippet__content__title"
    }, this.props.title), React.createElement("div", {
      className: "c-twitterSnippet__content__text"
    }, this.props.text), React.createElement("div", {
      className: "c-twitterSnippet__content__author"
    }, "twitteruser.com"))));
  };

  return TwitterSnippet;
}(React.Component);

export default TwitterSnippet;