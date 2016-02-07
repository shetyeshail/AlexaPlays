
/*
  Oracle NPC 
*/

var Oracle = function() {
    this.stats = {
	"level": 7,
	"att": 125,
	"def": 150,
	"hp": 600,
	"hostile": false
    };
    
    this.description = "Thought to be the wisest being in the universe; is usually peaceful unless he senses evil in your heart.";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }
}


module.exports = Oracle;
