(function(globals) {
    'use strict';
    const asyncForEach = async function(array, callback) {
      if (!Array.isArray(array)) throw new TypeError('asyncForEach() expects array as first argument');
      if (typeof callback !== 'function') throw new TypeError('asyncForEach() expects function as second argument');

      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    };
  
    if (typeof define !== 'undefined' && define.amd) {
      define([], function() {
        return asyncForEach;
      });
    } else if (typeof module !== 'undefined' && module.exports) {
      module.exports = asyncForEach;
    } else {
      globals.asyncForEach = asyncForEach;
    }
  })(this);