import { ILooseObject } from './lib\@types\types';
/**
 * This will return passed function, but debounced by given parameter
 *
 * @param {Function} fce which will be debounced
 * @param {number} ms time in miliseconds
 * @return {Function} debounced function
 */
declare const debounce: (fce: Function, ms: number) => (this: any) => void;
/**
 * Check in deep if property of some object exists and return it
 *
 * @param {string} property
 * @param {ILooseObject} item
 * @return {any | void}
 */
declare const deepExistsValue: (property: string, item: ILooseObject | null | undefined) => any;
export { debounce, deepExistsValue, };
