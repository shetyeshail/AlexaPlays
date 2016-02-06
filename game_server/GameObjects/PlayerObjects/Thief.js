
function Thief() {
    this.baseStats = {
        att:  10
        hp:   20
        def:  20
        agi:  40
        conf: 10
    }

    this.levelUp = function(){
        this.baseStats.att += 4;
        this.baseStats.hp += 6;
    }
}

module.exports = new Thief();
