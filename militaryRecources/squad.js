class Squad {
    constructor(defaultResources) {
        this.squad = [];
        if (defaultResources) this.combineResources(defaultResources);
    }
    isReadyToFight() {
        return this.squad.every(function (el) {
            return el.health > 0;
        })
    }
    isReadyToMove() {
        return this.squad.every(function (el) {
            return el.distance > 0;
        })
    }
    restore() {
        this.squad.forEach(function (el) {
            return el.health = el.maxHealth;
        })
    }
    getReadyToMoveResources() {
        this.squad.forEach(function (el) {
            return el.distance = el.maxDistance;
        })
    }
    combineResources(defaultResources) {
        this.squad.push(defaultResources);
    }
    cloneResource() {
        var squadClone = new Squad();
        this.squad.forEach(function (el) {
            squadClone.combineResources(el);
        })
        return squadClone;
    }
}

// Squad.prototype.isReadyToMove = function() {
    
// };
// Squad.prototype.isReadyToFight = function() {
    
// };
// Squad.prototype.restore = function() {
//     this.squad.forEach(function (el) {
//         return el.health = el.maxHealth;
//     })
// };
// Squad.prototype.getReadyToMoveResources = function() {
//     this.squad.forEach(function (el) {
//         return el.distance = el.maxDistance;
//     })
// };
// Squad.prototype.combineResources = function(defaultResources) {
//     this.squad.push(defaultResources);
// };
// Squad.prototype.cloneResource = function() {
//     var squadClone = new Squad();
//     this.squad.forEach(function (el) {
//         squadClone.combineResources(el);
//     })
//     return squadClone;
// };
