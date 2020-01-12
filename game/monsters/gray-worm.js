var GrayWorm = (function() {
    function GrayWorm(level) {
        Unit.call(this, 150, 300, level);
    }
  
    GrayWorm.prototype = Object.create(Unit.prototype);
    GrayWorm.prototype.constructor = GrayWorm;
  
    return GrayWorm;
  })();