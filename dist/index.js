/*!
 * name: @jswork/next-pick-pairs
 * description: Pick key/value pairs from object.
 * homepage: https://github.com/afeiship/next-pick-pairs
 * version: 1.0.0
 * date: 2020-11-22 15:25:59
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.pickPairs = function (inObject, inPaths, inDefaults) {
    var paths = inPaths || Object.keys(inObject);
    var defType = typeof inDefaults;
    return paths.map(function (path, index) {
      var defaultValue = null;

      switch (defType) {
        case 'object':
          defaultValue = nx.get(inDefaults, path);
          break;
        case 'function':
          defaultValue = inDefaults(index, path, inObject);
          break;
        default:
          defaultValue = null;
          break;
      }

      return {
        key: path,
        value: nx.get(inObject, path, defaultValue)
      };
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pickPairs;
  }
})();
