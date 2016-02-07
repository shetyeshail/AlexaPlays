
/*
  Dragon NPC 
*/

var Dragon = function() {
    this.stats = {
	"level": 10,
	"att": 200,
	"def": 300,
	"hp": 1000,
	"hostile": true
    };
    this.type = "monster";
    
    this.description = "There is not much to say about this beast. It is simply the king of the land - unmatched in power and ferocity. It is thought to be the cousin of the dragon of the seas.";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }
}


module.exports = Dragon;
