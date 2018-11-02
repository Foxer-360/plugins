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
import { Col, Form, Input, Row } from 'antd'; // import MediaLibrary from 'components/MediaLibrary';

import FacebookSnippet from "../partials/FacebookSnippet";
var placeholder = 'https://www.collaboraoffice.com/wp-content/' + 'plugins/post-grid/assets/frontend/css/images/placeholder.png';

var FacebookControl =
/** @class */
function (_super) {
  __extends(FacebookControl, _super);

  function FacebookControl() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FacebookControl.prototype.render = function () {
    var _this = this;

    return React.createElement("div", null, React.createElement("h2", null, "Social media - Facebook"), React.createElement(Row, null, React.createElement(Col, {
      span: 12
    }, React.createElement(Form.Item, __assign({}, this.props.rowFormItemLayout, {
      label: "Publisher"
    }), React.createElement(Input, {
      value: this.props.publisher,
      onChange: function onChange(e) {
        return _this.props.updatePublisher(e.target.value);
      }
    })), React.createElement(Form.Item, __assign({}, this.props.rowFormItemLayout, {
      label: "Title"
    }), React.createElement(Input, {
      value: this.props.title,
      onChange: function onChange(e) {
        return _this.props.updateTitle(e.target.value);
      }
    })), React.createElement(Form.Item, __assign({}, this.props.rowFormItemLayout, {
      label: "Description"
    }), React.createElement(Input, {
      type: "textarea",
      value: this.props.description,
      onChange: function onChange(e) {
        return _this.props.updateDescription(e.target.value);
      }
    }))), React.createElement(Col, {
      span: 12
    }, React.createElement(FacebookSnippet, __assign({}, this.gatherFacebookData(this.props))))));
  };
  /*private isReady(props: IFacebookControlProps) {
    if (props.image && props.title && props.description) {
      return true;
    }
       return false;
  }*/


  FacebookControl.prototype.gatherFacebookData = function (props) {
    return {
      author: props.publisher,
      description: props.description,
      image: props.image ? props.image : placeholder,
      title: props.title,
      url: props.url
    };
  };

  FacebookControl.defaultProps = {
    image: placeholder,
    url: 'https://www.koh-i-noor.cz/'
  };
  return FacebookControl;
}(React.Component);

export default FacebookControl;