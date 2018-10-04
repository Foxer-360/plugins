import { Info, List as ListComponent, Navigations as NavigationsComponent } from "../lib/components";
import { List as ListPlugin, Navigations as NavigationsPlugin } from "../lib/plugins";

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

      case 'navigations':
        return 'Navigations';

      default:
        return "Undefined (" + type + ")";
    }
  };

  PluginsService.prototype.getPluginTypes = function () {
    return ['navigations'];
  };

  PluginsService.prototype.getPluginComponent = function (type) {
    switch (type) {
      case 'info':
        return Info;

      case 'list':
        return ListComponent;

      case 'navigations':
        return NavigationsComponent;

      default:
        return null;
    }
  };

  PluginsService.prototype.getPlugin = function (type) {
    switch (type) {
      case 'list':
        return ListPlugin;

      case 'navigations':
        return NavigationsPlugin;

      default:
        return null;
    }
  };

  return PluginsService;
}();

export { PluginsService };