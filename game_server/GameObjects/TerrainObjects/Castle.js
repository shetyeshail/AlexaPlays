
/*
  The castle object creates a new castle terrain and sets its properties; along with randomly generated NPC
  units (quest units, monsters, benign units)
*/

var Castle = function() {
    this.type = "Castle";
    this.NPCList = []; //list of actual NPCs present in this terrain slot
    this.modifiers = [
	{ //executioner
      "agility": 0,
      "attack": 3,
	    "conf": 2,
      "defense": 2
	},
	{ //knight
	    "agility": 2,
      "attack": 5,
      "conf": 0,
      "defense": 5
	},
	{ //prince
	    "agility": 3,
      "attack": 0,
      "conf": 5,
      "defense": 0
	},
	{ //princess
      "agility": 3,
      "attack": 0,
      "conf": 5,
      "defense": 0
	},
	{ //slave
	    "agility": 5,
      "attack": 0,
      "conf": -4,
      "defense": 0
	},
	{ //thief
	    "agility": 5,
      "attack": 3,
      "conf": 3,
      "defense": 0
	}
    ];

    /*//import the relevant NPC objects
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
    }*/

    //returns the specific modifiers for the supplied class
    this.getStatModifiers = function(playerClassNum) {
	return this.modifiers[playerClassNum];
    }

    this.getDescription = function() {
	return this.description;
    }


    this.getType = function() {
	return this.type;
    }

    //gets the npc list for later use
    this.getNPCList = function() {
	return this.NPCList;
    }
}

module.exports = Castle;
