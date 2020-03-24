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
