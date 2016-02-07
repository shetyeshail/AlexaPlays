
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
    this.type = "spider";

    this.description = "Just your typical, household spider... only one hundred times larger.";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }

    this.escapeChance = 90;
    this.getEscapeChance = function() {
        return this.escapeChance;
    }
}


module.exports = Spider;
