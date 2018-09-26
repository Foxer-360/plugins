interface ILooseObject {
  [key: string]: any; // tslint:disable-line:no-any
}

interface IPluginClass {
  // Read data which plugin provides
  readData: () => any;

  // Setup context, it's an object which has listeners, etc..
  setContext: () => void;

  // Write or Read configuration of plugin instance
  writeConfig: () => void;
  readConfig: () => void;

  // Add or Remove listener for data change
  addListener: (l: () => void) => void;
  removeListener: () => void;
}

export {
  ILooseObject,
  IPluginClass,
};
