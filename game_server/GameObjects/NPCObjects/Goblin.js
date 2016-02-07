
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
    this.type = "monster";
    this.description = "A hunched-back foolish looking thing - ready to pull a prank or murder - either works!";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }
}


module.exports = Goblin;
