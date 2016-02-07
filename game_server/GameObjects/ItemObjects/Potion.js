
/*
  Potion class covers all types of potions; the init function simply initializes its stats to the 
  appropriate values (health, att, def) 
*/

var Potion = function() {
    this.stats = {
	hp: 0,
	att: 0,
	def: 0
    }

    this.name = "";
    this.cost = 0;
    
    this.init = function(type) {
	
	switch(type) {
	case "hp": this.stats.hp = 200;
	    this.name = "Health Potion";
	    this.cost = 30;
	    break;
	case "att": this.stats.att = 5;
	    this.name = "Attack Potion";
	    this.cost = 50;
	    break;
	case "def": this.stats.def = 5;
	    this.name = "Defense Potion";
	    this.cost = 50;
	    break;
	}
    }

    this.getStatBoost = function() {
	return this.stats;
    }
}

module.exports = Potion;

