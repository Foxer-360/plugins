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

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import GoogleSnippet from "../partials/GoogleSnippet";
import SeoWidget from "../SeoWidget";
var placeholder = 'https://www.collaboraoffice.com/wp-content/' + 'plugins/post-grid/assets/frontend/css/images/placeholder.png';

var GoogleControl =
/** @class */
function (_super) {
  __extends(GoogleControl, _super);

  function GoogleControl() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  GoogleControl.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        // actionUseMetaForAll,
    // currentPage,
    description = _a.description,
        focusKeyword = _a.focusKeyword,
        fullUrl = _a.fullUrl,
        rowFormItemLayout = _a.rowFormItemLayout,
        title = _a.title;
    /*const pagesWithSameKeyword = pages.filter((p: LooseObject) =>
      p.seo.focusKeyword &&
      focusKeyword &&
      p.seo.focusKeyword.toLowerCase().trim() === focusKeyword.toLowerCase().trim() &&
      p.id !== currentPage.id);*/

    return React.createElement("div", null, React.createElement("h2", null, "SEO meta information"), React.createElement(Row, null, React.createElement(Col, {
      span: 12,
      md: 24,
      lg: 12
    }, React.createElement(Form.Item, __assign({}, rowFormItemLayout, {
      label: "Title"
    }), React.createElement(Input, {
      defaultValue: title,
      onChange: function onChange(e) {
        return _this.props.updateTitle(e.target.value);
      }
    })), React.createElement(Form.Item, __assign({}, rowFormItemLayout, {
      label: "Description"
    }), React.createElement(Input, {
      defaultValue: description,
      onChange: function onChange(e) {
        return _this.props.updateDescription(e.target.value);
      }
    })), React.createElement(Form.Item, __assign({}, rowFormItemLayout, {
      label: "Focus keyword"
    }), React.createElement(Input, {
      defaultValue: focusKeyword,
      onChange: function onChange(e) {
        return _this.props.updateFocusKeyword(e.target.value);
      }
    })), React.createElement(Form.Item, null, React.createElement(SeoWidget, {
      title: title,
      description: description || '',
      duplicated: false,
      focusKeyword: focusKeyword || '',
      fullUrl: fullUrl,
      pagesWithSameKeyword: []
    }))), React.createElement(Col, {
      span: 12,
      md: 24,
      lg: 12
    }, React.createElement(GoogleSnippet, __assign({}, this.gatherGoogleData(this.props))))));
  };
  /*private isReady(props: IGoogleControlProps) {
    return props.description && props.title;
  }*/


  GoogleControl.prototype.gatherGoogleData = function (props) {
    return {
      description: props.description,
      image: props.image ? props.image : placeholder,
      title: props.title,
      url: props.url
    };
  };

  GoogleControl.defaultProps = {
    image: placeholder,
    url: 'https://www.koh-i-noor.cz/'
  };
  return GoogleControl;
}(React.Component);

export default GoogleControl;