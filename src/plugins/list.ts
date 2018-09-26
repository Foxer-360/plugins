import { ILooseObject } from '@source/types';

type Context = any; // tslint-disable-line:no-any

class List {

  private context: Context;

  private config: ILooseObject;

  constructor(context: Context, config?: {}) {
    if (!config) {
      this.config = {
        list: '',
      };
    } else {
      this.config = config;
    }

    this.context = context;
    this.context.writeProperty('list', this.config.list.split(','));
  }

  public writeConfig(config: ILooseObject) {
    this.config = config;
    this.context.writeProperty('list', this.config.list.split(','));
  }

}

export default List;
