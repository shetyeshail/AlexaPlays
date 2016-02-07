
/*
  Scorpion NPC 
*/

var Scorpion = function() {
    this.stats = {
	"level": 1,
	"att": 60,
	"def": 70,
	"hp": 150,
	"hostile": true
    };
    this.type = "monster";
    
    this.description = "Just a mini-van sized scorpion - you know, nothing too crazy...";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }
}


module.exports = Scorpion;
