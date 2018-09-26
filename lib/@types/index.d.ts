import { List as ListPlugin } from './plugins';
import * as React from 'react';
declare class PluginsService {
    getPluginTabName(type: string): string;
    getPluginTypes(): string[];
    getPluginComponent(type: string): typeof React.Component | null;
    getPlugin(type: string): typeof ListPlugin | null;
}
export { PluginsService, };
