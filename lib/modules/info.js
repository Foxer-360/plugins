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

export { InfoPlugin };