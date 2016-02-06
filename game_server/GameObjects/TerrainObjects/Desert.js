
/*
  The desert object creates a new desert terrain and sets its properties; along with randomly generated NPC 
  units (quest units, monsters, benign units)
*/

var Desert = function() {
    this.type = "Desert";
    this.NPCList = []; //list of actual NPCs present in this terrain slot
    this.thirstDamage = 2;
    this.modifiers = [
	{ //executioner
	    "attack": -2
	},
	{ //knight
	    "attack":  -2,
	    "agility": -4
	},
	{ //prince 
	    "attack": -2,
	    "defence": -2
	},
	{ //princess 
	    "attack": -2,
	    "defence": -2
	},
	{ //slave 
	    "agility": 3,
	    "conf": 4
	},
	{ //theif
	    "conf": 2,
	    "attack": 2
	}
    ];

    /*//import the relevant NPC objects 
    var Tremor = require('../NPCObjects/Tremor.js');
    var Scorpion = require('../NPCObjects/Scorpion.js');
    
    
    this.description = "A dangerous wasteland filled with decay. There doesn't seem to be much other than heat here.";

    //initializes the NPCs for the terrain
    this.init = function() {
	var num_npcs = Math.floor(Math.random() * 10);
	for(var i = 0; i < num_npcs; i++) {
	    var type = Math.floor(Math.random() * 10);
	    if(type < 2) {
		this.NPCList.push(new Tremor());
	    } else {
		this.NPCList.push(new Scorpion());
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
	
    //gets the npc list for later use
    this.getNPCList = function() {
	return this.NPCList;
    }


    this.getType = function() {
	return this.type;
    }
    
    //the desert will apply damage to characters gradually over time
    this.applyThirst = function() {
	return this.thirstDamage;
    }
}

module.exports = Desert;
