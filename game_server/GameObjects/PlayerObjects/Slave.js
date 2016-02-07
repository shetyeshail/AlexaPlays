
function Slave() {
    this.name = "Slave";
    
    this.baseStats = {
	att: 10,
	hp: 10,
	def: 20,
	agi: 10,
	conf: 10
    }
    
    this.levelUp = function(){
        this.baseStats.att += 5;
        this.baseStats.hp += 5;
        this.baseStats.def += 5;
        this.baseStats.agi += 5;
    }

}

module.exports = new Slave();
