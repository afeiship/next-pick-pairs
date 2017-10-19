(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.pickPairs = function (inObject, inPaths) {
    return inPaths.map(function(element) {
      return {
        key: element,
        value: nx.path( inObject, element )
      };
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pickPairs;
  }

}());
