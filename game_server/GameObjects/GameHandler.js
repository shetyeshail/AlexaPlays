/*
  GameHandler is the object that deals with all of the game handling - sets up interaction 
  between the user and game environment; as well as communicartion between other game objects.
*/


function GameHandler() {
    this.TerrainHandler = require('./TerrainObjects/TerrainHandler.js');
    this.Player = require('./PlayerObjects/Player.js');
    this.CombatHandler = require('./CombatHandler.js');
    this.currentMerch;
    this.fought = false;
    
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
	/*data comes in the form
	  {
	     type: ???,
	     info: ???
	  }
	*/

	switch(data.type) {
	case "move":
	    var newX = this.Player.getPLocation().xCoor + data.info.x;
	    var newY = this.Player.getPLocation().yCoor + data.info.y;
	    if(this.TerrainHandler.setPlayerPosition(newX, newY)) {
		this.Player.setPLocation(newX, newY);
		var modifiers = this.TerrainHandler.getTerrain(
		    newX, newY).getStatModifiers(
			this.Player.getCNum());
		this.Player.updateStats(modifiers);
		return "You have moved; you are now located at " + newX + ", " + newY;
	    }
	    return "Couldn't move in that direction.";
	    break;
	case "inventory":
	    if(data.info.message == "view") {
		var inv = this.Player.getInventory();
		return inv.toString();
	    }
	    break;
	case "use":
	    var response = "";
	    switch(data.info.message) {
	    case "Health Potion":
		response = this.Player.usePotion("hp");
		break;
	    case "Attack Potion":
		response = this.Player.usePotion("att");
		break;
	    case "Defense Potion":
		response = this.Player.usePotion("def");
		break;
	    }
	    return response;
	    break;
	case "observe":
	    if(data.info.message != null) {
		var NPCList = this.TerrainHandler.getTerrain(this.Player.getPLocation().xCoor,
					       this.Player.getPLocation().yCoor).
		    getNPCList();
		for(var i = 0; i < NPCList.length; i++) {
		    if(NPCList[i].type == data.info.message.toLowerCase()) {
			return NPCList[i].description;
		    }
		}
	    } else {
		return this.TerrainHandler.getSurroundingTerrains();
	    }
	case "attack":
	    if(!this.CombatHandler.isInCombat()) {
		//initiate an attack on monster
		var NPCList = this.TerrainHandler.getTerrain(this.Player.getPLocation().xCoor, this.Player.getPLocation().yCoor).
		    getNPCList();
		for(var i = 0; i < NPCList.length; i++) {
		    if(NPCList[i].type == data.info.message.toLowerCase()) {
			this.CombatHandler.init(this.Player, NPCList[i]);
			break;
		    }
		}
	    }
	    return this.CombatHandler.combatPhase("attack");
	    break;
	case "flee":
	    if(this.CombatHandler.isInCombat()) {
		var monster = this.CombatHandler.getOpponent();
		var chance = monster.getEscapeChance();
		var roll = Math.floor(Math.random() * 100);

		if(roll <= chance) {
		    this.CombatHandler.reset();
		    return "Successfully escaped combat!";
		}
		return "Failed to escape combat, the monster is angrier now!";
	    }
	    break;
	case "shop":
	    this.setCurrentMerchant();
	    switch(data.info.message.toLowerCase()) {
	    case "health":
		this.HandlePurchase("Health Potion");
		break;
	    case "attack":
		this.HandlePurchase("Attack Potion");
		break;
	    case "defense":
		this.HandlePurchase("Defense Potion");
		break;
	    }
	    break;
	}//end switch
					  
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
	var npcList = this.TerrainHandler.getTerrain(this.Player.getPLocation().xCoor, this.Player.getPLocation().yCoor).getNPCList();
	for(var i = 0; i < npcList.length; i++) {
	    if(npcList[i].type == "merchant") {
		this.currentMerch = npcList[i];
		return true;
	    }
	}
	return false;
    }

    //the entire procedure to purchase from a shop 
    this.handlePurchase = function(itemToPurchase) {
	var Market = this.currentMerch.getMarket();
	var itemList  = Market.getItemList();
	
	for(var i = 0; i < itemList.length; i++) {
	    if(itemList[i].name == itemToPurchase) {
		var paid = this.Player.pay(itemList[i].cost);
		if(!paid) {
		    return "You don't have enough money to purchase that item!";
		}
		this.Player.acquire(itemList[i]);
		return "Purchase successful!";
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
	//this.Player.dumpInventory();
	this.Player.dumpPlayerInfo();

	this.Player.usePotion('att');
	this.Player.dumpPlayerInfo();
    }
}

module.exports = new GameHandler();
