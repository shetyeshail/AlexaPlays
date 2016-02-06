
/*
  The castle object creates a new castle terrain and sets its properties; along with randomly generated NPC 
  units (quest units, monsters, benign units)
*/

var Castle = function() {
    this.NPCList = []; //list of actual NPCs present in this terrain slot
    this.modifiers = [
	{ //executioner
	    "attack": 3
	    "defense": 2
	    "conf": 2
	},
	{ //knight
	    "attack":  5,
	    "agility": 2,
	    "defense": 5
	},
	{ //prince
	    "agility": 3,
	    "conf": 5
	},
	{ //princess
	    "agility": 3,
	    "conf": 5
	},
	{ //slave 
	    "agility": 5,
	    "conf": -4
	},
	{ //theif
	    "agility" 5,
	    "attack": 3,
	    "conf": 3
	}
    ];

    //import the relevant NPC objects 
    var Dragon = require('../NPCObjects/Dragon.js');
    
    this.description = "A beautiful castle looking over all the land. Strangely it seems abandoned... There seem to be scratch marks and embers around...";

    //initializes the NPCs for the terrain
    this.init = function() {
	var num_npcs = Math.floor(Math.random() * 2);
	for(var i = 0; i < num_npcs; i++) {
	    var type = Math.floor(Math.random() * 10);
	    if(type < 1) {
		this.NPCList.push(new Dragon());
	    }
	}
    }

    //returns the specific modifiers for the supplied class 
    this.getStatModifiers = function(playerClassNum) {
	return this.modifiers[playerClassNum];
    }

    this.getDescription = function() {
	return this.description;
    }
	
    //gets the npc list for later use
    this.getNPCList = function() {
	return this.NPCList;
    }
}

module.exports = Castle;
