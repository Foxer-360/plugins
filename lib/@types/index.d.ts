import { Languages as LanguagesPlugin, List as ListPlugin, Navigations as NavigationsPlugin } from './plugins';
import * as React from 'react';
declare class PluginsService {
    getPluginTabName(type: string): string;
    getPluginTypes(): string[];
    getPluginComponent(type: string): typeof React.Component | null;
    getPlugin(type: string): typeof LanguagesPlugin | typeof ListPlugin | typeof NavigationsPlugin | null;
}
export { PluginsService, };
