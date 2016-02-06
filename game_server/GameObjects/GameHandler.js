
/*
  GameHandler is the object that deals with all of the game handling - sets up interaction 
  between the user and game environment; as well as communicartion between other game objects.
*/


function GameHandler() {
    this.TerrainHandler = require('./TerrainObjects/TerrainHandler.js');
    this.Player = require('./PlayerObjects/Player.js');

    //initializes, well, everything; cNum is the given class number
    this.init = function(playerName, cNum) {
	//Initialize player stats to the defaults 
	Player.init(playerName, cNum);
	//create a new game world 
	TerrainHandler.init();
	//set the player position within the new game world (0,0 for default) 
	TerrainHandler.setPlayerPosition(
	    Player.getPLocation().xCoor,
	    Player.getPLocation().yCoor);
	//calculate stat modifiers for the player based on the terrain 
	var modifiers = TerrainHandler.getTerrain(
	    Player.getPLocation().xCoor,
	    Player.getPLocation().yCoor).getStatModifiers(
		Player.getCNum());
	//set the players new stats based on the terrain they're placed in
	Player.updateStats(modifiers);
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
}

module.exports = new GameHandler();
