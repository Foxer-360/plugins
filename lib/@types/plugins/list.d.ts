import { ILooseObject } from '../types';
declare type Context = any;
declare class List {
    private context;
    private config;
    constructor(context: Context, config?: {});
    writeConfig(config: ILooseObject): void;
}
export default List;
