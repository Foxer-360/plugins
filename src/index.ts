import {
  Info,
  List as ListComponent
} from '@source/components';
import {
  List as ListPlugin,
} from '@source/plugins';
import * as React from 'react';

class PluginsService {

  public getPluginTabName(type: string): string {
    switch (type) {
      case 'info':
        return 'Info';
      case 'list':
        return 'List';
      default:
        return `Undefined (${type})`;
    }
  }

  public getPluginTypes(): string[] {
    return ['info', 'list'];
  }

  public getPluginComponent(type: string): typeof React.Component | null {
    switch (type) {
      case 'info':
        return Info;
      case 'list':
        return ListComponent;
      default:
        return null;
    }
  }

  public getPlugin(type: string) {
    switch (type) {
      case 'list':
        return ListPlugin;
      default:
        return null;
    }
  }

}

export {
  PluginsService,
};
