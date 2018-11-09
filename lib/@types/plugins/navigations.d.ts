import { ILooseObject } from './lib\@types\types';
declare type Context = any;
declare class Navigations {
    private context;
    private client;
    private listeners;
    constructor(context: Context, config?: {}, client?: any);
    resetPlugin(context: Context, config?: {}): void;
    writeConfig(config: ILooseObject): void;
    private resolveNavigations;
    private transformNavigationsIntoTree;
    private buildNavTree;
}
export default Navigations;
