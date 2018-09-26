"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginsService = void 0;

var _components = require("./components");

var _plugins = require("./plugins");

var PluginsService =
/** @class */
function () {
  function PluginsService() {}

  PluginsService.prototype.getPluginTabName = function (type) {
    switch (type) {
      case 'info':
        return 'Info';

      case 'list':
        return 'List';

      default:
        return "Undefined (" + type + ")";
    }
  };

  PluginsService.prototype.getPluginTypes = function () {
    return ['info', 'list'];
  };

  PluginsService.prototype.getPluginComponent = function (type) {
    switch (type) {
      case 'info':
        return _components.Info;

      case 'list':
        return _components.List;

      default:
        return null;
    }
  };

  PluginsService.prototype.getPlugin = function (type) {
    switch (type) {
      case 'list':
        return _plugins.List;

      default:
        return null;
    }
  };

  return PluginsService;
}();

exports.PluginsService = PluginsService;