
/*
  Bandit NPC
*/

var Bandit = function() {
    this.stats = {
	"level": 2,
	"att": 70,
	"def": 50,
	"hp": 200,
	"hostile": false
    };
    this.type = "bandit";
    this.description = "Just a low-life. These types prefer to stay underground. They'll typically stay away unless you instigate a fight.";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }

    this.escapeChance = 7;
    this.getEscapeChance = function() {
        return this.escapeChance;
    }
}


module.exports = Bandit;
