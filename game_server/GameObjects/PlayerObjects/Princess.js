
function Princess () {
    this.name = "Princess";
    
    this.baseStats = {
        att:  10,
        hp:   30,
        def:  20,
        agi:  10,
        conf: 30
    }

    this.levelUp = function(){
        this.baseStats.att += 4;
        this.baseStats.def += 6;
    }
}

module.exports = new Princess();
