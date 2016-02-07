
/*
  Merchant creates a Merchant NPC which allows the user to buy goods like potions and weapons.
*/

var Merchant = function() {
    //object to interact with the market
    this.marketImport = require('../ItemObjects/Market.js');
    this.Market = new this.marketImport();
    this.name = "";
    this.type = "merchant";

    
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

	this.Market.init();
    }

    //a simple, humble greeting
    this.greet = function() {
	var n = Math.floor(Math.random() * 3);
	switch(n) {
	case 0: return "Greetings! Care to buy something?";
	    break;
	case 1: return "Such nice weather lately, no?";
	    break;
	case 2: return "Only the finest items for you!";
	}
    }

    this.getMarket = function() {
	return this.Market;
    }
}

module.exports = Merchant;
