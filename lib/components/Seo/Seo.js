var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

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

import * as React from 'react';
import SeoForm from "./components/SeoForm";
import { adopt } from 'react-adopt';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
var GET_CONTEXT = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n{\n  page @client\n  language @client\n}\n"], ["\n{\n  page @client\n  language @client\n}\n"])));
var GET_SEO_PLUGIN_DATA = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query getSeoPluginData($page: ID!, $language: ID!) {\n    pagePlugins(where: { AND: [{page: { id: $page } }, {language: { id: $language }}] }) {\n      id\n      plugin\n      content\n    }\n  }\n"], ["\n  query getSeoPluginData($page: ID!, $language: ID!) {\n    pagePlugins(where: { AND: [{page: { id: $page } }, {language: { id: $language }}] }) {\n      id\n      plugin\n      content\n    }\n  }\n"])));
export var SAVE_PAGE_PLUGIN = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation savePagePlugin(\n        $page: ID,\n        $language: ID,\n        $plugin: String!,\n        $content: Json,\n    ) {\n        savePagePlugin(\n            data: {\n                page: {\n                    connect: {\n                        id: $page\n                    }\n                },\n                language: {\n                    connect: {\n                        id: $language\n                    }\n                },\n                plugin: $plugin,\n                content: $content\n            }\n        ) {\n            id\n            plugin\n            content\n        }\n    }\n"], ["\n    mutation savePagePlugin(\n        $page: ID,\n        $language: ID,\n        $plugin: String!,\n        $content: Json,\n    ) {\n        savePagePlugin(\n            data: {\n                page: {\n                    connect: {\n                        id: $page\n                    }\n                },\n                language: {\n                    connect: {\n                        id: $language\n                    }\n                },\n                plugin: $plugin,\n                content: $content\n            }\n        ) {\n            id\n            plugin\n            content\n        }\n    }\n"])));
var ComposedQuery = adopt({
  getContext: function getContext(_a) {
    var render = _a.render;
    return React.createElement(Query, {
      query: GET_CONTEXT
    }, function (_a) {
      var data = _a.data;
      return render(data);
    });
  },
  getSeoByPageAndLanguage: function getSeoByPageAndLanguage(_a) {
    var render = _a.render,
        _b = _a.getContext,
        page = _b.page,
        language = _b.language;
    return React.createElement(Query, {
      query: GET_SEO_PLUGIN_DATA,
      variables: {
        page: page,
        language: language
      }
    }, function (_a) {
      var data = _a.data;
      return render(data);
    });
  },
  savePagePlugin: function savePagePlugin(_a) {
    var render = _a.render;
    return React.createElement(Mutation, {
      mutation: SAVE_PAGE_PLUGIN
    }, function (savePagePlugin) {
      return render(savePagePlugin);
    });
  }
});

var Seo =
/** @class */
function (_super) {
  __extends(Seo, _super);

  function Seo(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  Seo.prototype.render = function () {
    var _this = this;

    return React.createElement(ComposedQuery, null, function (_a) {
      var savePluginData = _a.savePluginData,
          getSeoByPageAndLanguage = _a.getSeoByPageAndLanguage;
      return React.createElement(SeoForm, __assign({}, _this.props, {
        page: null,
        language: null,
        loading: _this.props.loading,
        data: getSeoByPageAndLanguage.length > 0 && getSeoByPageAndLanguage[0] || null,
        pages: _this.state.pages,
        onChangeData: function onChangeData(seoData) {
          return _this.handleChange(seoData);
        },
        useSocialMetaForAll: true
      }));
    });
  };

  Seo.prototype.handleChange = function (data) {
    this.setState(__assign({}, data));
  };

  return Seo;
}(React.Component);

export default Seo;
var templateObject_1, templateObject_2, templateObject_3;