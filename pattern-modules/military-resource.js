var militaryResource = (function() {
    return {
        createMilitaryResource: function (type, health, distance) {
            return {
                type: type,
                health: health,
                maxHealth: health,
                distance: distance,
                maxDistance: distance
            }
        }
    }
})();


// function MilitaryResource(type, health, distance) {
//     this.type = type;
//     this.health = health;
//     this.maxHealth = maxHealth = health;
//     this.distance = distance;
//     this.maxDistance = maxDistance = distance;
// }
 
// MilitaryResource.prototype.isReadyToMove = function() {
//      return this.distance > 0;
// };
// MilitaryResource.prototype.isReadyToFight = function() {
//     return this.health > 0;
// };
// MilitaryResource.prototype.restore = function() {
//     return this.health = this.maxHealth;
// };
// MilitaryResource.prototype.clone = function() {
//     return new MilitaryResource(this.type, this.health, this.distance);
// };
var warrior = militaryResource.createMilitaryResource('warrior', 200, 300);
console.log(warrior);