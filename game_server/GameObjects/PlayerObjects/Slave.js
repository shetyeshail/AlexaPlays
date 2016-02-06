
function Slave() {

    this.levelUp = function(){
        this.baseStats.att += 5;
        this.baseStats.hp += 5;
        this.baseStats.def += 5;
        this.baseStats.agi += 5;
    }

}

module.exports = new Slave();
