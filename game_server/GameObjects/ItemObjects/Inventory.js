
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
	this.coins -= amount;
    }

    this.earn = function(amount) {
	this.coins += amount;
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
