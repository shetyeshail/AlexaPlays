
/*
  The inventory object maintains a list of objects the Player holds at any given moment
*/

function Inventory() {
    this.itemList = [];

    this.init = function() {
	//push several potions of health to get the player started
    }

    this.add = function(newItem) {
	if(typeof(this.itemList[newItem]) == 'undefined' || this.itemList[newItem] == null) {
	    this.itemList[newItem] = 1;
	} else {
	    this.itemList[newItem]++;
	}
    }

    this.remove = function(itemToRemove) {
	if(typeof(this.itemList[]) == 'undefined' || this.itemList[itemToRemove] == null || this.itemList[itemToRemove] == 0) {
	    return false;
	} else {
	    this.itemList[itemToRemove]--;
	    return true;
	}
    }
}

module.exports = new Inventory();
