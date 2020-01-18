var horseman = new MilitaryResource('horseman', 300, 800);
console.log(horseman);
var warrior = new MilitaryResource('warrior', 200, 500);
console.log(warrior.isReadyToMove());
var archer = new MilitaryResource('archer', 150, 600);
console.log(archer.isReadyToFight());
var horsemanClone = horseman.clone();
console.log(horsemanClone);
archer.health = 0;
console.log(archer);
archer.restore();
console.log(archer);
 
var squad = new Squad(warrior);
squad.combineResources(horseman);
console.log(squad);

var squadClone = squad.cloneResource();
console.log(squadClone, squadClone === squad);

squad.combineResources(archer);
console.log(squad, squadClone);

squad.squad[1].distance = 0;
console.log(squad.isReadyToMove());

squad.squad[0].health = 0;
console.log(squad.isReadyToFight());

squad.getReadyToMoveResources();
console.log(squad.isReadyToMove());

squad.restore();
console.log(squad.isReadyToFight());