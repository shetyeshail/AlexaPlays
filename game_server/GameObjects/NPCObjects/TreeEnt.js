
/*
  TreeEnt NPC
*/

var TreeEnt = function() {
    this.stats = {
	"level": 3,
	"att": 85,
	"def": 20,
	"hp": 500,
	"hostile": false
    };
    this.type = "treeent";

    this.description = "These ancient species only attack if you hurt the wildlife. They are the guardians of these woods.";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }
}


module.exports = TreeEnt;
