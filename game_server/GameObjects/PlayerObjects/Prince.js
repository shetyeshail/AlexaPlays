
function Prince() {
    this.baseStats = {
        att:  20
        hp:   20
        def:  10
        agi:  20
        conf: 30
    }

    this.levelUp = function(){
        this.baseStats.att += 6;
        this.baseStats.hp += 1;
        this.baseStats.def += 3;
    }
}

module.exports = new Prince();
