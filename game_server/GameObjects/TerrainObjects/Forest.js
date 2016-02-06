
/*
  The forest object creates a new forest terrain and sets its properties; along with randomly generated NPC 
  units (quest units, monsters, benign units)
*/

var Forest = function() {
    this.type = "Forest";
    this.NPCList = []; //list of actual NPCs present in this terrain slot
    this.modifiers = [
	{ //executioner
	    "attack": 5,
	    "defence": 5,
	    "health": 5
	},
	{ //knight
	    "attack":  4,
	    "agility": -3
	},
	{ //prince 
	    "attack": 4,
	    "agility": -3
	},
	{ //princess 
	    "attack": 3,
	    "health": 3,
	    "defence": -3
	},
	{ //slave 
	    "attack": -4,
	    "agility": 3,
	    "conf": -4
	},
	{ //theif 
	    "defense": 4,
	    "agility": 4,
	    "conf": 4,
	    "attack": -5
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
