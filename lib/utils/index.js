function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * This will return passed function, but debounced by given parameter
 *
 * @param {Function} fce which will be debounced
 * @param {number} ms time in miliseconds
 * @return {Function} debounced function
 */
var debounce = function debounce(fce, ms) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var callback = function callback() {
      timeout = null;
      fce.apply(context, args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(callback, ms);
  };
};
/**
 * Check in deep if property of some object exists and return it
 *
 * @param {string} property
 * @param {ILooseObject} item
 * @return {any | void}
 */


var deepExistsValue = function deepExistsValue(property, item) {
  property = property.replace(/[.,;]/, '.');

  if (item === void 0 || item === undefined || item === null) {
    return void 0;
  } // Last level, just return true, item is exists


  if (property.length < 1) {
    return item;
  }

  if (_typeof(item) !== 'object') {
    return void 0;
  }

  var index = property.indexOf('.');
  var head = '';
  var tail = '';

  if (index < 0) {
    head = property;
  } else {
    head = property.slice(0, index);
    tail = property.slice(index + 1);
  }

  return deepExistsValue(tail, item[head]);
};

export { debounce, deepExistsValue };