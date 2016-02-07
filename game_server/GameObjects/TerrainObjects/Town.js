
/*
  The town object creates a new town terrain and sets its properties; along with randomly generated NPC
  units (quest units, monsters, benign units)
*/

var Town = function() {
    this.type = "Town";
    this.NPCList = []; //list of actual NPCs present in this terrain slot
    this.modifiers = [
	{ //executioner
	    "attack": 0,
	    "defense": 0,
	    "agility": 0,
	    "conf": 0
	},
	{ //knight
	    "attack":  3,
	    "agility": 2,
	    "conf": 0,
	    "defense": 3
	},
	{ //prince
	    "attack": 3,
	    "agility": 0,
	    "conf": 5,
	    "defense": 5
	},
	{ //princess
	    "attack": 3,
	    "agility": 0,
	    "conf": 5,
	    "defense": 5
	},
	{ //slave
	    "attack": 0,
	    "agility": -5,
	    "conf": -5,
	    "defense": 0
	},
	{ //thief
	    "attack": 0,
	    "agility": -3,
	    "conf": -4,
	    "defense": 0
	}
    ];

    //import the relevant NPC objects
    var Merchant = require('../NPCObjects/Merchant.js');
    var Bandit = require('../NPCObjects/Bandit.js');
    var Villager = require('../NPCObjects/Villager.js');

    this.description = "A pleasant village with a thriving marketplace. The peoples' admiration for the prince and princess is great.";

    //initializes the NPCs for the terrain
    this.init = function() {
	var num_npcs = Math.floor(Math.random() * 10);
	for(var i = 0; i < num_npcs; i++) {
	    var type = Math.floor(Math.random() * 10);
	    if(type < 6) {
		var tempVillager = new Villager();
		tempVillager.init();
		this.NPCList.push(tempVillager);
	    } else {
		this.NPCList.push(new Bandit());
	    }
	}
	var tempMerch = new Merchant();
	tempMerch.init();
	this.NPCList.push(tempMerch);
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

module.exports = Town;
