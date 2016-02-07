
/*
  GameHandler is the object that deals with all of the game handling - sets up interaction 
  between the user and game environment; as well as communicartion between other game objects.
*/


function GameHandler() {
    this.TerrainHandler = require('./TerrainObjects/TerrainHandler.js');
    this.Player = require('./PlayerObjects/Player.js');
    this.currentMerch;
    
    //initializes, well, everything; cNum is the given class number
    this.init = function(playerName, cNum) {
	//Initialize player stats to the defaults 
	this.Player.init(playerName, cNum);
	//set the player position within the new game world (0,0 for default)
	this.TerrainHandler.setPlayerPosition(
	    this.Player.getPLocation().xCoor,
	    this.Player.getPLocation().yCoor);
	//create a new game world 
	this.TerrainHandler.init();
	//calculate stat modifiers for the player based on the terrain 
	var modifiers = this.TerrainHandler.getTerrain(
	    this.Player.getPLocation().xCoor,
	    this.Player.getPLocation().yCoor).getStatModifiers(
		this.Player.getCNum());
	//set the players new stats based on the terrain they're placed in
	this.Player.updateStats(modifiers);
    }

    //decides what to do based on user voice input JSON data given by the Amazon Echo lambda function
    this.dispatch = function(data) {

    }

    this.movePlayer = function(x, y) {
	if(TerrainHandler.setPlayerPosition(x, y)) {
	    //we've determined it's a good place to move the player
	    Player.pMove(x, y);
	    //calculate stat modifiers for the player based on the terrain 
	    var modifiers = TerrainHandler.getTerrain(x, y).getStatModifiers(
		    Player.getCNum());
	    //set the players new stats based on the terrain they're placed in
	    Player.updateStats(modifiers);
	}
    }
    
    //each town terrain will only have one merchant
    this.setCurrentMerchant = function() {
	var npcList = this.TerrainHandler.getTerrain(this.Player.getPLocation.xCoor,
						     this.Player.getPLocation.yCoor).getNPCList();
	for(var i = 0; i < npcList.length; i++) {
	    if(npcList[i].type == "merchant") {
		this.currentMerch = npcList[i];
	    }
	}
    }

    //the entire procedure to purchase from a shop 
    this.handlePurchase = function(itemToPurchase) {
	var Market = this.currentMerch.getMarket();
	var itemList  = Market.getItemList();
	for(var i = 0; i < itemList.length; i++) {
	    if(itemList[i].getName == itemToPurchase) {
		this.Player.pay(itemList[i].getInfo().cost);
		this.Player.acquire(itemList[i]);
	    }
	}
    }

    //test that terrain stuff works lel
    this.terrainTest = function() {
	for(var i = 0; i < 10; i++) {
	    for(var j = 0; j < 10; j++) {
		this.TerrainHandler.setPlayerPosition(i, j);
	    }
	}
	this.TerrainHandler.terrainDump();
    }

    //test that player-stuff works lul
    this.playerTest = function() {
	this.Player.dumpInventory();
	this.Player.dumpPlayerInfo();
    }
}

module.exports = new GameHandler();
