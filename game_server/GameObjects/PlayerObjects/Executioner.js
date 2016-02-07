
function Executioner() {
    this.name = "Executioner";
    
    this.baseStats = {
        att:  40,
        hp:   20,
        def:  20,
        agi:  10,
        conf: 10
    }

    this.levelUp = function(){
        this.baseStats.att += 10;
    }
}

module.exports = new Executioner();
