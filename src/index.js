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
