
function Knight() {
    this.name = "Knight";
    
    this.baseStats = {
        att:  20,
        hp:   30,
        def:  30,
        agi:  10,
        conf: 10
    }

    this.levelUp = function(){
        this.baseStats.hp += 5;
        this.baseStats.def += 5;
    }
}

module.exports = new Knight();
