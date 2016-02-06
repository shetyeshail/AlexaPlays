
/*
  SlenderMan NPC 
*/

var SlenderMan = function() {
    this.stats = {
	"level": 4,
	"att": 20,
	"def": 30,
	"hp": 1000,
	"hostile": true
    };
    this.sanity = 0;
    
    this.description = "He's slender. And he's a man. And he's terrifying. Run away from these before you lose your sanity... and the game.";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }

    this.sanityDrain = function() {
	this.sanity += Math.floor(Math.random() * 10);
    }
}


module.exports = SlenderMan;
