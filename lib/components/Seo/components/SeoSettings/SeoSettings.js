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
import { Col, Row, Tabs } from 'antd';
import FacebookControl from "./components/FacebookControl";
import TwitterControl from "./components/TwitterControl";
import GooglePlusControl from "./components/GooglePlusControl";
import GoogleControl from "./components/GoogleControl"; // import SaveSeoButton from '../../components/SaveSeoButton';

var rowFormItemLayout = {
  labelCol: {
    sm: {
      span: 6
    },
    xs: {
      span: 24
    }
  },
  wrapperCol: {
    sm: {
      span: 17
    },
    xs: {
      span: 24
    }
  }
};

var SeoSettings =
/** @class */
function (_super) {
  __extends(SeoSettings, _super);

  function SeoSettings() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SeoSettings.prototype.render = function () {
    var props = this.props;
    var currentPage = props.currentPage,
        // url,
    // currentLanguage,
    pages = props.pages;
    return React.createElement("div", {
      className: "pageSeo"
    }, React.createElement(Tabs, {
      type: "card"
    }, React.createElement(Tabs.TabPane, {
      tab: "Seo",
      key: "1"
    }, React.createElement(GoogleControl, {
      currentPage: currentPage,
      pages: pages,
      image: props.image,
      title: props.title,
      description: props.description,
      focusKeyword: props.focusKeyword,
      updateTitle: props.updateTitle,
      updateDescription: props.updateDescription,
      updateFocusKeyword: props.updateFocusKeyword,
      rowFormItemLayout: rowFormItemLayout
    })), React.createElement(Tabs.TabPane, {
      tab: "Facebook",
      key: "2"
    }, React.createElement(FacebookControl // useSocialMetaForAll={props.useSocialMetaForAll}
    , {
      // useSocialMetaForAll={props.useSocialMetaForAll}
      title: props.facebookTitle,
      publisher: props.facebookPublisher,
      description: props.facebookDescription,
      image: props.facebookImage,
      updateTitle: props.updateFacebookTitle,
      updatePublisher: props.updateFacebookPublisher,
      updateDescription: props.updateFacebookDescription,
      updateImage: props.updateFacebookImage,
      rowFormItemLayout: rowFormItemLayout
    })), React.createElement(Tabs.TabPane, {
      tab: "Twitter",
      key: "3"
    }, React.createElement(TwitterControl // useSocialMetaForAll={props.useSocialMetaForAll}
    , {
      // useSocialMetaForAll={props.useSocialMetaForAll}
      title: props.twitterTitle,
      publisher: props.twitterPublisher,
      description: props.twitterDescription,
      image: props.twitterImage,
      updateTitle: props.updateTwitterTitle,
      updatePublisher: props.updateTwitterPublisher,
      updateDescription: props.updateTwitterDescription,
      updateImage: props.updateTwitterImage,
      rowFormItemLayout: rowFormItemLayout
    })), React.createElement(Tabs.TabPane, {
      tab: "Google+",
      key: "4"
    }, React.createElement(GooglePlusControl // useSocialMetaForAll={props.useSocialMetaForAll}
    , {
      // useSocialMetaForAll={props.useSocialMetaForAll}
      title: props.googlePlusTitle,
      publisher: props.googlePlusPublisher,
      image: props.googlePlusImage,
      updateTitle: props.updateGooglePlusTitle,
      updatePublisher: props.updateGooglePlusPublisher,
      updateImage: props.updateGooglePlusImage,
      rowFormItemLayout: rowFormItemLayout
    }))), React.createElement(Row, {
      style: {
        marginBottom: '35px'
      }
    }, React.createElement(Col, {
      span: 3,
      push: 21
    }, React.createElement("div", {
      style: {
        width: '100%'
      }
    }))));
  };

  return SeoSettings;
}(React.Component);

export default SeoSettings;