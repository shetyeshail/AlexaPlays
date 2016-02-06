
/*
  The forest object creates a new forest terrain and sets its properties; along with randomly generated NPC
  units (quest units, monsters, benign units)
*/

var Forest = function() {
    this.type = "Forest";
    this.NPCList = []; //list of actual NPCs present in this terrain slot
    this.modifiers = [
	{ //executioner
      "agility": 5,
      "attack": 0,
      "conf": 0,
      "defense": 5
	},
	{ //knight
      "agility": -3,
      "attack": 4,
      "conf": 0,
      "defense": 0
	},
	{ //prince
      "agility": -3,
      "attack": 4,
      "conf": 0,
      "defense": 0
	},
	{ //princess
      "agility": 0,
      "attack": 3,
      "conf": 0,
      "defense": -3
	},
	{ //slave
      "agility": 3,
      "attack": -4,
      "conf": -4,
      "defense": 0
	},
	{ //theif    <-- nice
      "agility": 4,
      "attack": -5,
      "conf": 4,
      "defense": 4
	}
    ];

    /*//import the relevant NPC objects
    var Oracle = require('../NPCObjects/Oracle.js');
    var TreeEnt = require('../NPCObjects/TreeEnt.js');
    var Spider = require('../NPCObjects/Spider.js');


    this.description = "A lush, untouched forest filled with various wildlife.";

    //initializes the NPCs for the terrain
    this.init = function() {
	var num_npcs = Math.floor(Math.random() * 10);
	for(var i = 0; i < num_npcs; i++) {
	    var type = Math.floor(Math.random() * 2);
	    switch(type) {
	    case 0: NPCList.push(new TreeEnt());
		break;
	    case 1: NPCList.push(new Spider());
		break;
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

    //spawns an oracle in this forest as a response to a quest trigger
    this.spawnOracle = function() {
	this.NPCList.push(new Oracle());
    }


    this.getType = function() {
	return this.type;
    }

    //gets the npc list for later use
    this.getNPCList = function() {
	return this.NPCList;
    }
}

module.exports = Forest;
