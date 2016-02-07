
/*
  The inventory object maintains a list of objects the Player holds at any given moment
*/

function Inventory() {
    this.itemList = [];
    this.coins;
    
    this.init = function() {
	this.coins = 200;
	var Potion = require('./Potion.js');
	//push several potions of health to get the player started
	for(var i = 0; i < 3; i++) {
	    this.itemList.push(new Potion().init('hp'));
	}
	
    }

    this.add = function(newItem) {
	if(typeof(this.itemList[newItem]) == 'undefined' || this.itemList[newItem] == null) {
	    this.itemList[newItem] = 1;
	} else {
	    this.itemList[newItem]++;
	}
    }

    this.remove = function(itemToRemove) {
	if(typeof(this.itemList) == 'undefined' || this.itemList[itemToRemove] == null || this.itemList[itemToRemove] == 0) {
	   return false;
	} else {
	    this.itemList[itemToRemove]--;
	    return true;
	}
    }

    this.spend = function(amount) {
	this.coins -= amount;
    }

    this.earn = function(amount) {
	this.coins += amount;
    }
    
    this.use = function(type) {
	var keys = Object.keys(this.itemList);
	for(var i = 0; i < keys.length; i++) {
	    if(type == 'hp' && this.itemList[keys[i]].stats.hp > 0) {
		if(this.itemList[keys[i]] > 0) {
		    this.itemList[keys[i]]--;
		    return this.itemList[keys[i]].getStatBoost();
		}
	    } else if(type == 'att' && this.itemList[keys[i]].stats.att > 0) {
		if(this.itemList[keys[i]] > 0) {
		    this.itemList[keys[i]]--;
		    return this.itemList[keys[i]].getStatBoost();
		}
	    } else if(type == 'def' && this.itemList[keys[i]].stats.def > 0) {
		if(this.itemList[keys[i]] > 0) {
		    this.itemList[keys[i]]--;
		    return this.itemList[keys[i]].getStatBoost();
		}
	    }
	}
	return null;
    }

    this.dump = function() {
	var keys = Object.keys(this.itemList);
	for(var i = 0; i < keys.length; i++) {
	    console.log("Item: " + keys[i] + " -> " + this.itemList[keys[i]]);
	}
	console.log("Coins: " + this.coins);
    }
}

module.exports = new Inventory();
