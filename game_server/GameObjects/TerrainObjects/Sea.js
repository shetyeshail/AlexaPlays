
/*
  The sea object creates a new sea terrain and sets its properties; along with randomly generated NPC 
  units (quest units, monsters, benign units)
*/

var Sea = function() {
    this.NPCList = []; //list of actual NPCs present in this terrain slot
    this.modifiers = [
	{ //executioner
	    "attack": -2,
	    "agility": -4,
	    "conf": -5
	},
	{ //knight
	    "attack":  -2,
	    "agility": -5,
	    "conf": -5
	},
	{ //prince 
	    "attack": -2,
	    "agility": -2,
	    "conf": -3
	},
	{ //princess 
	    "attack": -2,
	    "agility": -2,
	    "conf": -3
	},
	{ //slave 
	    "agility": -3,
	    "attack": -2,
	    "conf": -3
	},
	{ //theif
	    "agility" -3,
	    "attack": -2,
	    "conf": -3
	}
    ];

    //import the relevant NPC objects 
    var SeaDragon = require('../NPCObjects/SeaDragon.js');
    
    
    this.description = "A vast expanse of water. Rumors have spoken of the existence of a Sea Dragon. It's probably best for us to get out of here as soon as possible...";

    //initializes the NPCs for the terrain
    this.init = function() {
	var num_npcs = Math.floor(Math.random() * 3);
	for(var i = 0; i < num_npcs; i++) {
	    var type = Math.floor(Math.random() * 10);
	    if(type < 2) {
		this.NPCList.push(new SeaDragon());
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

module.exports = Sea;
