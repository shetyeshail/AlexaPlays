
/*
  The cave object creates a new cave terrain and sets its properties; along with randomly generated NPC 
  units (quest units, monsters, benign units)
*/

var Cave = function() {
    this.NPCList = []; //list of actual NPCs present in this terrain slot
    this.modifiers = [
	{ //executioner
	    "attack": 4
	    "agility": -4,
	    "conf": -2
	},
	{ //knight
	    "attack":  3,
	    "agility": -5,
	    "defense": 3
	},
	{ //prince 
	    "attack": 1,
	    "agility": -2,
	    "conf": -3
	},
	{ //princess 
	    "attack": 1,
	    "agility": -2,
	    "conf": -3
	},
	{ //slave 
	    "agility": 5,
	    "attack": 1,
	    "conf": 3
	},
	{ //theif
	    "agility" 4,
	    "attack": 1,
	    "conf": 2
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
	
    //gets the npc list for later use
    this.getNPCList = function() {
	return this.NPCList;
    }
}

module.exports = Cave;
