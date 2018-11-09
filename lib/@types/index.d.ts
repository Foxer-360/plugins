import * as React from 'react';
import { Languages as LanguagesPlugin, List as ListPlugin, Navigations as NavigationsPlugin, Seo as SeoPlugin } from './plugins';
declare class PluginsService {
    getPluginTabName(type: string): string;
    getPluginTypes(): string[];
    getPluginComponent(type: string): typeof React.Component | null;
    getPlugin(type: string): typeof LanguagesPlugin | typeof ListPlugin | typeof NavigationsPlugin | typeof SeoPlugin | null;
}
export { PluginsService, };
