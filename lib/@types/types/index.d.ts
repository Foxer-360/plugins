interface ILooseObject {
    [key: string]: any;
}
interface IPluginClass {
    readData: () => any;
    setContext: () => void;
    writeConfig: () => void;
    readConfig: () => void;
    addListener: (l: () => void) => void;
    removeListener: () => void;
}
export { ILooseObject, IPluginClass, };
