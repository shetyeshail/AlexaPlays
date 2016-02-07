
/*
  Tremor NPC
*/

var Tremor = function() {
    this.stats = {
	"level": 6,
	"att": 110,
	"def": 100,
	"hp": 350,
	"hostile": true
    };
    this.type = "tremor";
    this.description = "Your worst nightmare. These suckers come out of the ground in unpredictable locations. You could be crushed at any moment...";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }
}


module.exports = Tremor;
