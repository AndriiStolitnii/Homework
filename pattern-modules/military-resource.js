var militaryResource = (function() {
    var unit = {
        type: null,
        health: null,
        distance: null,
        maxHealth: null,
        maxDistance: null
    }
    return {
        create: function(type, health, distance) {
            unit.type = type;
            unit.health = health;
            unit.distance = distance;
            unit.maxHealth = health;
            unit.maxDistance = distance;
            return unit;
        },
        isReadyToMove: function() {
            return unit.distance > 0;
        },
        isReadyToFight: function() {
            return unit.health > 0;
        },
        restore: function() {
            return unit.health = unit.maxHealth;
        },
        clone: function() {
            return militaryResource.create(unit.type, unit.health, unit.distance);
        }
    }
})();

var warrior = militaryResource.create('warrior', 10, 20);
console.log(warrior);
var isReadyToMove = militaryResource.isReadyToMove();
console.log(isReadyToMove);
var isReadyToFight = militaryResource.isReadyToFight();
console.log(isReadyToFight);
warrior.health = 0;
console.log(warrior);
militaryResource.restore();
console.log(warrior);
var warriorClone = militaryResource.clone();
console.log(warriorClone);

