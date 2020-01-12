var WhiteWalker = (function() {
    function WhiteWalker(level) {
        Unit.call(this, 100, 200, level);
    }
  
    WhiteWalker.prototype = Object.create(Unit.prototype);
    WhiteWalker.prototype.constructor = WhiteWalker;
  
    return WhiteWalker;
  })();