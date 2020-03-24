/*!
 * name: @feizheng/next-pick-pairs
 * description: Pick key/value pairs from object.
 * url: https://github.com/afeiship/next-pick-pairs
 * version: 1.1.0
 * date: 2020-03-24 13:08:35
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.pickPairs = function(inObject, inPaths, inDefaults) {
    var paths = inPaths || Object.keys(inObject);
    var defType = typeof inDefaults;
    return paths.map(function(path, index) {
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

//# sourceMappingURL=next-pick-pairs.js.map
