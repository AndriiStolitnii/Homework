class MilitaryResource {
    constructor(type, health, distance) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
    }
    isReadyToMove() {
        return this.distance > 0;
    }
    isReadyToFight() {
        return this.health > 0;
    }
    restore() {
        return this.health = this.maxHealth;
    }
    clone() {
        return new MilitaryResource(this.type, this.health, this.distance);
    }
}
