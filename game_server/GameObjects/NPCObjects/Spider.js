
/*
  Spider NPC 
*/

var Spider = function() {
    this.stats = {
	"level": 1,
	"att": 60,
	"def": 20,
	"hp": 200,
	"hostile": false
    };
    
    this.description = "Just your typical, household spider... only one hundred times larger.";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }
}


module.exports = Spider;
