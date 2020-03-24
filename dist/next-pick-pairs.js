/*!
 * name: @feizheng/next-pick-pairs
 * description: Pick key/value pairs from object.
 * url: https://github.com/afeiship/next-pick-pairs
 * version: 1.0.0
 * date: 2020-03-24 12:29:51
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.pickPairs = function(inObject, inPaths, inDefaults) {
    return inPaths.map(function(path) {
      var defaultValue =
        typeof inDefaults === 'object' ? nx.get(inDefaults, path) : null;

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
