import {
  Info,
  List as ListComponent,
  Navigations as NavigationsComponent,
} from '@source/components';
import {
  List as ListPlugin,
  Navigations as NavigationsPlugin,
} from '@source/plugins';
import * as React from 'react';

class PluginsService {

  public getPluginTabName(type: string): string {
    switch (type) {
      case 'info':
        return 'Info';
      case 'list':
        return 'List';
      case 'navigations':
        return 'Navigations';
      default:
        return `Undefined (${type})`;
    }
  }

  public getPluginTypes(): string[] {
    return ['navigations'];
  }

  public getPluginComponent(type: string): typeof React.Component | null {
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
  }

  public getPlugin(type: string) {
    switch (type) {
      case 'list':
        return ListPlugin;
      case 'navigations':
        return NavigationsPlugin;
      default:
        return null;
    }
  }

}

export {
  PluginsService,
};
