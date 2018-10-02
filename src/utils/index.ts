import { ILooseObject } from '@source/types';

/**
 * This will return passed function, but debounced by given parameter
 *
 * @param {Function} fce which will be debounced
 * @param {number} ms time in miliseconds
 * @return {Function} debounced function
 */
const debounce = (fce: Function, ms: number) => { // tslint:disable-line:ban-types
  let timeout: NodeJS.Timer | null;

  return function(this: any) { // tslint:disable-line:no-any
    const context = this;
    const args = arguments;

    const callback = () => {
      timeout = null;
      fce.apply(context, args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(callback, ms);
  }
};

/**
 * Check in deep if property of some object exists and return it
 *
 * @param {string} property
 * @param {ILooseObject} item
 * @return {any | void}
 */
const deepExistsValue = (property: string, item: ILooseObject | null | undefined): any | void => {
  property = property.replace(/[.,;]/, '.');

  if (item === void 0 || item === undefined || item === null) {
    return void 0;
  }

  // Last level, just return true, item is exists
  if (property.length < 1) {
    return item;
  }

  if ((typeof item) !== 'object') {
    return void 0;
  }

  const index = property.indexOf('.');
  let head = '';
  let tail = '';
  if (index < 0) {
    head = property;
  } else {
    head = property.slice(0, index);
    tail = property.slice(index + 1);
  }

  return deepExistsValue(tail, item[head]);
};

export {
  debounce,
  deepExistsValue,
};
