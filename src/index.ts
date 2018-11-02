import * as React from 'react';

import {
  Info,
  Languages as LanguagesComponent,
  List as ListComponent,
  Navigations as NavigationsComponent,
  Seo as SeoComponent,
} from '@source/components';

import {
  Languages as LanguagesPlugin,
  List as ListPlugin,
  Navigations as NavigationsPlugin,
  Seo as SeoPlugin,
} from '@source/plugins';

class PluginsService {

  public getPluginTabName(type: string): string {
    switch (type) {
      case 'info':
        return 'Info';
      case 'list':
        return 'List';
      case 'navigations':
        return 'Navigations';
      case 'languages':
        return 'Languages';
      case 'seo':
        return 'SEO';
      default:
        return `Undefined (${type})`;
    }
  }

  public getPluginTypes(): string[] {
    return ['navigations', 'languages', 'seo'];
  }

  public getPluginComponent(type: string): typeof React.Component | null {
    switch (type) {
      case 'info':
        return Info;
      case 'list':
        return ListComponent;
      case 'navigations':
        return NavigationsComponent;
      case 'languages':
        return LanguagesComponent;
      case 'seo':
        return SeoComponent;
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
      case 'languages':
        return LanguagesPlugin;
      case 'seo':
        return SeoPlugin;
      default:
        return null;
    }
  }

}

export {
  PluginsService,
};
