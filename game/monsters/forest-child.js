var ForestChild = (function() {
    function ForestChild(level) {
        Unit.call(this, 100, 200, level);
    }
  
    ForestChild.prototype = Object.create(Unit.prototype);
    ForestChild.prototype.constructor = ForestChild;
  
    return ForestChild;
  })();