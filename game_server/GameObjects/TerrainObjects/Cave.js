
/*
  The cave object creates a new cave terrain and sets its properties; along with randomly generated NPC
  units (quest units, monsters, benign units)
*/

var Cave = function() {
    this.type = "Cave";
    this.NPCList = []; //list of actual NPCs present in this terrain slot
    this.modifiers = [
	{ //executioner
	    "agility": -4,
	    "attack": 4,
	    "conf": -2,
	    "defense": 0
	},
	{ //knight
	    "agility": -5,
	    "attack": 3,
	    "conf": 0,
	    "defense": 3
	},
	{ //prince
	    "agility": -2,
	    "attack": 1,
	    "conf": -3,
	    "defense": 0
	},
	{ //princess
	    "agility": -2,
	    "attack": 1,
	    "conf": -3,
	    "defense": 0
	},
	{ //slave
	    "agility": 5,
	    "attack": 1,
	    "conf": 3,
	    "defense": 0
	},
	{ //thief
	    "agility": 4,
	    "attack": 1,
	    "conf": 2,
	    "defense": 0
	}
    ];

    //import the relevant NPC objects
    var SlenderMan = require('../NPCObjects/SlenderMan.js');
    var Goblin = require('../NPCObjects/Goblin.js');
    
    this.description = "A dark cave probably filled with all sorts of treasures; or all sorts of horrors... Only one way to find out!";
    
    //initializes the NPCs for the terrain
    this.init = function() {
	var num_npcs = Math.floor(Math.random() * 5);
	for(var i = 0; i < num_npcs; i++) {
	    var type = Math.floor(Math.random() * 10);
	    if(type < 3) {
		this.NPCList.push(new SlenderMan());
	    } else {
		this.NPCList.push(new Goblin());
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

    this.getType = function() {
	return this.type;
    }

    //gets the npc list for later use
    this.getNPCList = function() {
	return this.NPCList;
    }
}

module.exports = Cave;
