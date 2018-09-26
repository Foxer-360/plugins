// import { IPluginClass } from '@source/types';

class InfoPlugin {

  private listener: (() => void) | null;

  constructor() {
    this.listener = null;
  }

  public addListener(l: () => void): void {
    this.listener = l;
  }

  public removeListener(): void {
    if (this.listener) {
      this.listener = null;
    }
  }

}

export {
  InfoPlugin,
};
