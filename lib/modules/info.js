"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoPlugin = void 0;

// import { IPluginClass } from '@source/types';
var InfoPlugin =
/** @class */
function () {
  function InfoPlugin() {
    this.listener = null;
  }

  InfoPlugin.prototype.addListener = function (l) {
    this.listener = l;
  };

  InfoPlugin.prototype.removeListener = function () {
    if (this.listener) {
      this.listener = null;
    }
  };

  return InfoPlugin;
}();

exports.InfoPlugin = InfoPlugin;