var squad = (function () {
    var army = {
        squad: []
    };
    return {
        create: function (defaultResources) {
            if (defaultResources) squad.combineResources(defaultResources);
            return army;
        },
        combineResources: function(defaultResources) {
            army.squad.push(defaultResources);
            return army;
        },
        isReadyToMove: function() {
            return army.squad.every(function (el) {
                return el.distance > 0;
            })
        },
        isReadyToFight: function() {
            return army.squad.every(function (el) {
                return el.health > 0;
            })
        },
        restore: function() {
            army.squad.forEach(function (el) {
                return el.health = el.maxHealth;
            }) 
        },
        getReadyToMoveResources: function() {
            army.squad.forEach(function (el) {
                return el.distance = el.maxDistance;
            })
        },
        cloneResource: function() {
            var squadClone = {
                squad: []
            };
                army.squad.forEach(function (el) {
                    squadClone.squad.push (el);
                })
                return squadClone;
            }
    }
}());
