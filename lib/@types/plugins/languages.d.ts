import { ILooseObject } from '../types';
declare type Context = any;
declare class Languages {
    private context;
    private client;
    private listeners;
    constructor(context: Context, config?: {}, client?: any);
    resetPlugin(context: Context, config?: {}): void;
    writeConfig(config: ILooseObject): void;
    private resolveNavigations;
}
export default Languages;
