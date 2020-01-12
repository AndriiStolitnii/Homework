var MadFox = (function() {
    function MadFox(level) {
        Unit.call(this, 100, 200, level);
    }
  
    MadFox.prototype = Object.create(Unit.prototype);
    MadFox.prototype.constructor = MadFox;
  
    return MadFox;
  })();