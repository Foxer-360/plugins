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

import { debounce, deepExistsValue } from "../../../lib/utils";
import * as React from 'react';

var List =
/** @class */
function (_super) {
  __extends(List, _super);

  function List(props) {
    var _this = _super.call(this, props) || this;

    var list = '';

    if (props.config && props.config.list) {
      list = props.config.list;
    }

    _this.state = {
      list: list
    };
    _this.handleChangeInput = _this.handleChangeInput.bind(_this);
    _this.fireChange = debounce(_this.fireChange, 300).bind(_this);
    return _this;
  }

  List.prototype.componentDidUpdate = function (prevProps) {
    var list = deepExistsValue('config.list', this.props);
    var prevList = deepExistsValue('config.list', prevProps);

    if (list !== prevList) {
      return this.setState({
        list: list
      });
    }
  };

  List.prototype.render = function () {
    return React.createElement("div", null, React.createElement("span", null, "Here you can fill elements, that you want to show in Components. Please separate them by ,"), React.createElement("input", {
      value: this.state.list,
      onChange: this.handleChangeInput
    }));
  };

  List.prototype.handleChangeInput = function (e) {
    var _this = this;

    var value = e.target.value;

    if (!value || value === null) {
      value = '';
    }

    this.setState({
      list: value
    }, function () {
      _this.fireChange();
    });
  };

  List.prototype.fireChange = function () {
    if (this.props.onChange) {
      // tslint:disable-next-line:no-console
      console.log('Plugin LIST fire onChange');
      this.props.onChange(__assign({}, this.state));
    }
  };

  return List;
}(React.Component);

export default List;