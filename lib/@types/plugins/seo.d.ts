import { ILooseObject } from '../types';
declare type Context = any;
declare class Seo {
    private context;
    constructor(context: Context, config?: {}, client?: any);
    resetPlugin(context: Context, config?: {}): void;
    writeConfig(config: ILooseObject): void;
}
export default Seo;
