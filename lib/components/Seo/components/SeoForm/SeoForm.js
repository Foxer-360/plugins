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
import SeoSettings from "../SeoSettings";

var SeoForm =
/** @class */
function (_super) {
  __extends(SeoForm, _super);

  function SeoForm(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      data: null
    };
    _this.handleChangeData = _this.handleChangeData.bind(_this);
    return _this;
  }

  SeoForm.prototype.componentWillReceiveProps = function (nextProps) {
    if (this.state.data === null) {
      this.handleChangeData(nextProps.data);
    }
  };

  SeoForm.prototype.render = function () {
    var _this = this;

    var loading = this.props.loading;

    if (loading || !this.props) {
      return null;
    }

    console.log(this.state);
    return React.createElement("div", {
      className: "content__holder"
    }, "aaaaa", React.createElement(SeoSettings, __assign({}, this.props, {
      currentPage: this.props.page || null,
      currentLanguage: this.props.language || null,
      url: this.state.data && this.state.data.url || '',
      pages: this.props.pages,
      title: this.state.data && this.state.data.title || '',
      description: this.state.data && this.state.data.description || '',
      focusKeyword: this.state.data && this.state.data.focusKeyword || '',
      facebookTitle: this.state.data && this.state.data.facebookTitle || '',
      facebookPublisher: this.state.data && this.state.data.facebookPublisher || '',
      facebookDescription: this.state.data && this.state.data.facebookDescription || '',
      facebookImage: this.state.data && this.state.data.facebookImage || '',
      twitterTitle: this.state.data && this.state.data.twitterTitle || '',
      twitterPublisher: this.state.data && this.state.data.twitterPublisher || '',
      twitterDescription: this.state.data && this.state.data.twitterDescription || '',
      twitterImage: this.state.data && this.state.data.twitterImage || '',
      googlePlusTitle: this.state.data && this.state.data.googlePlusTitle || '',
      googlePlusPublisher: this.state.data && this.state.data.googlePlusPublisher || '',
      googlePlusImage: this.state.data && this.state.data.googlePlusImage || '',
      loading: loading,
      updateTitle: function updateTitle(data) {
        return _this.handleChangeData({
          title: data
        });
      },
      updateDescription: function updateDescription(data) {
        return _this.handleChangeData({
          description: data
        });
      },
      updateFocusKeyword: function updateFocusKeyword(data) {
        return _this.handleChangeData({
          focusKeyword: data
        });
      },
      updateFacebookTitle: function updateFacebookTitle(data) {
        return _this.handleChangeData({
          facebookTitle: data
        });
      },
      updateFacebookPublisher: function updateFacebookPublisher(data) {
        return _this.handleChangeData({
          facebookPublisher: data
        });
      },
      updateFacebookDescription: function updateFacebookDescription(data) {
        return _this.handleChangeData({
          facebookDescription: data
        });
      },
      updateFacebookImage: function updateFacebookImage(data) {
        return _this.handleChangeData({
          facebookImage: data
        });
      },
      updateTwitterTitle: function updateTwitterTitle(data) {
        return _this.handleChangeData({
          twitterTitle: data
        });
      },
      updateTwitterPublisher: function updateTwitterPublisher(data) {
        return _this.handleChangeData({
          twitterPublisher: data
        });
      },
      updateTwitterDescription: function updateTwitterDescription(data) {
        return _this.handleChangeData({
          twitterDescription: data
        });
      },
      updateTwitterImage: function updateTwitterImage(data) {
        return _this.handleChangeData({
          twitterImage: data
        });
      },
      updateGooglePlusTitle: function updateGooglePlusTitle(data) {
        return _this.handleChangeData({
          googlePlusTitle: data
        });
      },
      updateGooglePlusPublisher: function updateGooglePlusPublisher(data) {
        return _this.handleChangeData({
          googlePlusPublisher: data
        });
      },
      updateGooglePlusImage: function updateGooglePlusImage(data) {
        return _this.handleChangeData({
          googlePlusImage: data
        });
      }
    })));
  };

  SeoForm.prototype.handleChangeData = function (data) {
    var _this = this;

    if (data) {
      var newData_1 = __assign({}, this.state.data);

      Object.keys(data).forEach(function (key) {
        newData_1[key] = data[key];
      });
      this.setState({
        data: newData_1
      }, function () {
        if (_this.props.onChangeData) {
          _this.props.onChangeData(_this.state.data);
        }
      });
    }
  };

  return SeoForm;
}(React.Component);

export default SeoForm;