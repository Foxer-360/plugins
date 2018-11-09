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

import * as React from 'react'; // import { adopt } from 'react-adopt';
// import { Query } from 'react-apollo';
// import { queries } from '@source/services/graphql';

import SeoForm from "./components/SeoForm";

var Seo =
/** @class */
function (_super) {
  __extends(Seo, _super);

  function Seo(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      pages: []
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  Seo.prototype.render = function () {
    var _this = this;

    return React.createElement(SeoForm, __assign({}, this.props, {
      page: null,
      language: null,
      loading: this.props.loading,
      data: null,
      pages: this.state.pages,
      onChangeData: function onChangeData(seoData) {
        return _this.handleChange(seoData);
      },
      useSocialMetaForAll: true
    }));
    /*<PagePluginQuery>
      {(data: any) => {
        const pluginData = (data && data.plugin && data.plugin.content ? data.plugin.content : null);
            });
      }}
    </PagePluginQuery>*/
  };

  Seo.prototype.handleChange = function (data) {
    if (this.props.onChange) {
      this.props.onChange(data);
    }
  };

  return Seo;
}(React.Component);

export default Seo;