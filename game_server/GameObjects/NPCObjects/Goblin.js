
/*
  Goblin NPC
*/

var Goblin = function() {
    this.stats = {
	"level": 3,
	"att": 80,
	"def": 50,
	"hp": 250,
	"hostile": true
    };
    this.type = "goblin";
    this.description = "A hunched-back foolish looking thing - ready to pull a prank or murder - either works!";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }

    this.escapeChance = 40;
    this.getEscapeChance = function() {
        return this.escapeChance;
    }
}


module.exports = Goblin;
