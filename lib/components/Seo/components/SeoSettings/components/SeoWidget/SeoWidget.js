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

import React, { Component } from 'react';
import axios from 'axios';
import striptags from 'striptags';

var SeoWidget =
/** @class */
function (_super) {
  __extends(SeoWidget, _super);

  function SeoWidget(props) {
    var _this = _super.call(this, props) || this;

    _this.getPageContent = function () {
      var url = _this.props.fullUrl;
      var parser = new DOMParser();

      if (!url) {
        return null;
      }

      return axios.get(url).then(function (response) {
        _this.setState({
          pageContent: parser.parseFromString(response.data, 'text/html')
        });
      }).catch(function (error) {// console.log('PAGE CONTENT URL ERROR:', error);
      });
    };

    _this.state = {
      checkAltTags: false,
      checkArticlesContent: false,
      pageContent: null
    };
    return _this;
  }

  SeoWidget.prototype.componentDidMount = function () {
    this.getPageContent();
  };

  SeoWidget.prototype.componentWillReceiveProps = function (nextProps) {
    if (this.state.pageContent && nextProps.focusKeyword && nextProps.focusKeyword.length > 0) {
      var focusKeyword = nextProps.focusKeyword;
      var pageContent = this.state.pageContent; // Check AltTags

      var images = Array.from(pageContent.getElementsByTagName('img'));

      for (var i = 0; i < images.length; i++) {
        this.setState({
          checkAltTags: images[i].alt.toLowerCase().includes(focusKeyword.toLowerCase())
        });
      } // Check content


      if (focusKeyword.length > 0 && striptags(pageContent.body.innerHTML).split('sitewindow')[0].toLowerCase().includes(focusKeyword.toLowerCase())) {
        this.setState({
          checkArticlesContent: true
        });
      } else {
        this.setState({
          checkArticlesContent: false
        });
      }
    }
  };

  SeoWidget.prototype.render = function () {
    var _a = this.props,
        title = _a.title,
        description = _a.description,
        fullUrl = _a.fullUrl;
    var start = 'The focus keyword';
    return React.createElement("div", null, React.createElement("ul", {
      className: "seoWidget"
    }, React.createElement("li", null, React.createElement("span", {
      className: "circle " + (title && this.checkValueIncludes(title) ? 'green' : 'red')
    }), start + " " + (title && this.checkValueIncludes(title) ? 'IS' : 'is NOT') + " on the title of the page."), React.createElement("li", null, React.createElement("span", {
      className: "circle " + (fullUrl && this.checkValueIncludes(fullUrl) ? 'green' : 'red')
    }), start + " " + (fullUrl && this.checkValueIncludes(fullUrl) ? 'IS' : 'is NOT') + " in the URL of the page."), React.createElement("li", null, React.createElement("span", {
      className: "circle " + (this.state.checkArticlesContent ? 'green' : 'red')
    }), start + " " + (this.state.checkArticlesContent ? 'IS' : 'is NOT') + " on the content of the article."), React.createElement("li", null, React.createElement("span", {
      className: "circle " + (description && this.checkValueIncludes(description) ? 'green' : 'red')
    }), start + " " + (description && this.checkValueIncludes(description) ? 'IS' : 'is NOT') + " on the meta description."), React.createElement("li", null, React.createElement("span", {
      className: "circle " + (description && this.checkValueLength(description) ? 'green' : 'red')
    }), "The length of the meta description " + (description && this.checkValueLength(description) ? 'IS' : 'is NOT') + " sufficient."), React.createElement("li", null, React.createElement("span", {
      className: "circle " + (this.state.checkAltTags ? 'green' : 'red')
    }), start + " " + (this.state.checkAltTags ? 'IS' : 'is NOT') + " on the alt tag of the images."), React.createElement("li", null, React.createElement("span", {
      className: "circle " + (this.props.pagesWithSameKeyword && this.props.pagesWithSameKeyword.length === 0 ? 'green' : 'red')
    }), "" + (this.props.pagesWithSameKeyword && this.props.pagesWithSameKeyword.length === 0 ? 'You\'ve never used this keyword before, very good.' : 'You\'ve used this keyword before in these pages:'), React.createElement("ul", null, this.props.pagesWithSameKeyword && this.props.pagesWithSameKeyword.map(function (p) {
      return React.createElement("li", null, React.createElement("a", {
        href: ""
      }, p.name));
    })))));
  };

  SeoWidget.prototype.checkValueIncludes = function (value) {
    if (this.props.focusKeyword) {
      var keyword = this.props.focusKeyword.toLowerCase();

      if (keyword.length > 0) {
        return value && value.toLowerCase().includes(keyword);
      }
    }

    return false;
  };

  SeoWidget.prototype.checkValueLength = function (value) {
    return value.length !== 0 && value.length <= 160;
  };

  return SeoWidget;
}(Component);

export default SeoWidget;