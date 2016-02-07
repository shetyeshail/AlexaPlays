
/*
  A simple container for item objects 
*/
var Market = function() {
    this.itemList = [];

    this.init = function() {
	var Potion = require('./Potion.js');

	//initialize a health potion 
	var hPotion = new Potion();
	hPotion.init('hp');
	this.addItem(hPotion);

	//initialize an attack potion
	var aPotion = new Potion();
	aPotion.init('att');
	this.addItem(aPotion);

	//initialize a defense potion
	var dPotion = new Potion();
	dPotion.init('def');
	this.addItem(dPotion);
    }
    
    //adds a new item to the shop
    this.addItem = function(newItem) {
	if(newItem == null) return false;
	this.itemList.push(newItem);
	return true;
    }

    //returns the information of the item (cost, name, desc, stat boostss)
    this.getItemInfo = function(itemName) {
	for(var i = 0; i < this.itemList.length; i++) {
	    if(this.itemList[i].getName() == itemName) {
		return this.itemList[i].getInfo();
	    }
	}
	return null;
    }

    //lists the items in the list for testing purposes
    this.list = function() {
	for(var i = 0; i < this.itemList.length; i++) {
	    console.log(this.itemList[i].getName());
	}
    }

    this.getItemList = function() {
	return this.itemList;
    }
}

module.exports = Market;
