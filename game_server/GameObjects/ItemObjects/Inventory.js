
/*
  The inventory object maintains a list of objects the Player holds at any given moment
*/

function Inventory() {
    this.itemList = [];
    this.coins;
    this.Potion = require('./Potion.js');
    
    this.init = function() {
	this.coins = 200;
	
	//push several potions of health to get the player started
	for(var i = 0; i < 3; i++) {
	    var pot = new this.Potion();
	    pot.init("hp");

	    this.itemList.push(pot);
	}
    }

    this.add = function(newItem) {
	if(newItem == null) return;
	this.itemList.push(newItem);
    }

    this.remove = function(itemToRemove) {
	if(itemToRemove == null || this.itemList.indexOf(itemToRemove) == -1) return;
	var idx = this.itemList.indexOf(itemToRemove);
	this.itemList.splice(idx, 1);
    }

    this.spend = function(amount) {
	if(this.coins > amount) {
	    this.coins -= amount;
	    return true;
	}
	return false;
    }

    this.earn = function(amount) {
	this.coins += amount;
    }

    //returns a strig representation of the inventory 
    this.toString = function() {
	var str = "You have ";
	var pots = [0, 0, 0];  //health, att, def 
	for(var i = 0; i < this.itemList.length; i++) {
	    if(this.itemList[i].name == "Health Potion") {
		pots[0]++;
	    } else if(this.itemList[i].name == "Attack Potion") {
		pots[1]++;
	    } else {
		//we are really making assumptions here that there are only three types of items in this world...
		pots[2]++;
	    }
	}//end for
	if(pots[0] > 0) {
	    str += pots[0] + " Health Potions";
	}

	if(pots[1] > 0) {
	    str += ", " + pots[1] + " Attack Potions";
	}

	if(pots[2] > 0) {
	    str += ", and " + pots[i] + " Defense Potions";
	}

	str += " in your inventory.";

	return str;
    }
    
    this.use = function(type) {
	var ret = null; 
	for(var i = 0; i < this.itemList.length; i++) {
	    if(type == 'hp' && this.itemList[i].getStatBoost().hp > 0) {
		ret = this.itemList[i].getStatBoost(); 
		this.itemList.splice(i, 1);
	    } else if(type == 'att' && this.itemList[i].getStatBoost().att > 0) {
		ret = this.itemList[i].getStatBoost(); 
		this.itemList.splice(i, 1);
	    } else if(type == 'def' && this.itemList[i].getStatBoost().def > 0) {
		ret = this.itemList[i].getStatBoost(); 
		this.itemList.splice(i, 1);
	    }
	}
	
	return ret;
    }

    this.dump = function() {
	for(var i = 0; i < this.itemList.length; i++) {
	    console.log(this.itemList[i].name);
	}
	console.log("Coins: " + this.coins);
    }
}

module.exports = new Inventory();
