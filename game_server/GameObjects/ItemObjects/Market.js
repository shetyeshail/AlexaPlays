
/*
  A simple container for item objects 
*/
var Market = function() {
    this.itemList = [];

    //adds a new item to the shop
    this.addItem = function(newItem) {
	if(newItem == null) return false;
	itemList.push(newItem);
	return true;
    }

    //returns the information of the item (cost, name, desc, stat boostss)
    this.getItemInfo(itemName) {
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
}

module.exports = Market;
