
/*
  Villager creates a Villager NPC with which the user can interact with an possibly accept quests from.
*/

var Villager = function() {
    //to do
    //this.Quest = require('../QuestObjects/Quest.js');
    
    this.name = "";
    this.hasQuest = false;
    this.type = "villager";

    
    this.init = function() {
	//set up the name
	var n = Math.floor(Math.random() * 6);
	switch(n) {
	case 0: this.name = "Vuk Petrovic";
	    break;
	case 1: this.name = "Chethra Yen";
	    break;
	case 2: this.name = "Doreen Lu";
	    break;
	case 3: this.name = "Shail Shetye";
	    break;
	case 4: this.name = "Tyreak Allen";
	    break;
	case 5: this.name = "Harsh Patel";
	}

	//to do
	//var hasQuest = Math.floor(Math.random() * 10);
	//if(hasQuest < 3) {
	    //this.Quest = new this.Quest().init();
	    //this.hasQuest = true;
	//}
    }

    //a simple, humble greeting
    this.greet = function() {
	var n = Math.floor(Math.random() * 3);
	switch(n) {
	case 0: return "I used to be an adventurer like you, but then I took an arrow to the knee.";
	    break;
	case 1: return "Boy I'm glad I don't need to go fight dangerous monsters like you! The simple farmer life is for me...";
	    break;
	case 2: return "I am much too busy to talk now.";
	}
    }

    this.getName = function() {
	return this.name;
    }
}

module.exports = Villager;
