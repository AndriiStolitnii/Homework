function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
}
 
Squad.prototype.isReadyToMove = function() {
    return this.squad.every(function (el) {
        return el.distance > 0;
    })
};
Squad.prototype.isReadyToFight = function() {
    return this.squad.every(function (el) {
        return el.health > 0;
    })
};
Squad.prototype.restore = function() {
    this.squad.forEach(function (el) {
        return el.health = el.maxHealth;
    })
};
Squad.prototype.getReadyToMoveResources = function() {
    this.squad.forEach(function (el) {
        return el.distance = el.maxDistance;
    })
};
Squad.prototype.combineResources = function(defaultResources) {
    this.squad.push(defaultResources);
};
Squad.prototype.cloneResource = function() {
    var squadClone = new Squad();
    this.squad.forEach(function (el) {
        squadClone.combineResources(el);
    })
    return squadClone;
};