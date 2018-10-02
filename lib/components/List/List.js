"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../utils");

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
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

var __assign = void 0 && (void 0).__assign || function () {
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
    _this.fireChange = (0, _utils.debounce)(_this.fireChange, 300).bind(_this);
    return _this;
  }

  List.prototype.componentDidUpdate = function (prevProps) {
    var list = (0, _utils.deepExistsValue)('config.list', this.props);
    var prevList = (0, _utils.deepExistsValue)('config.list', prevProps);

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

var _default = List;
exports.default = _default;