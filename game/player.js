var Player = (function() {
    function Player(level) {
      Unit.call(this, 500, 500, level);
    }
  
    Player.prototype = Object.create(Unit.prototype);
    Player.prototype.constructor = Player;
  
    return Player;
  })();