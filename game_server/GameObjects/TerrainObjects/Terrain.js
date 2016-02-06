
/*
  Main terrain handler object responsible for manipulating and setting up the terrain grid and environments.
*/

function TerrainHandler() {
    this.grid = null;
    this.gridSize = 100; //good default
    this.playerPos = null;

    /*
      import all the different terrains
    */
    this.Cave = require('./Cave.js');
    this.Forest = require('./Forest.js');
    this.Town = require('./Town.js');
    this.Desert = require('./Desert.js');
    this.Castle = require('./Castle.js');
    this.Sea = require('./Sea.js');
    
    //initialize terrain-related game states 
    this.init = function() {
	//intialize the grid spaces
	for(var r = 0; r < this.gridSize; r++) {
	    for(var c = 0; c < this.gridSize; c++) {
		this.grid[r][c] = null;
	    }
	}

	//initialize terrains around and on the player position
	this.setTerrain(this.playerPos.x - 1, this.playerPost.y - 1);  //top left 
	this.setTerrain(this.playerPos.x, this.playerPost.y - 1);      //top
	this.setTerrain(this.playerPos.x + 1, this.playerPost.y - 1);  //top right 
	this.setTerrain(this.playerPos.x - 1, this.playerPost.y);      //left 
	this.setTerrain(this.playerPos.x, this.playerPost.y);          //center 
	this.setTerrain(this.playerPos.x + 1, this.playerPost.y);      //right 
	this.setTerrain(this.playerPos.x - 1, this.playerPost.y + 1);  //bottom left 
	this.setTerrain(this.playerPos.x, this.playerPost.y + 1);      //bottom
	this.setTerrain(this.playerPos.x + 1, this.playerPost.y + 1);  //bottom right 
    }

    //keep track of player position 
    this.setPlayerPosition = function(x_coor, y_coor) {
	if(this.isValidSlot(x_coor, y_coor)) {
	    this.playerPos = {
		x: x_coor,
		y: y_coor
	    }
	    return true; //SUCCESS
	}
	return false; //FAIL
    }

    //set up the terrain type for this slot
    this.setTerrain = function(x, y) {
	if(this.isValidSlot(x, y)) {
	    var terrainSelector = Math.floor(Math.random() * 6);
	    switch(terrainSelector) {
	    case 0: this.grid[x][y] = new this.Forest();
		this.grid[x][y].init();
		break;
      	    case 1: this.grid[x][y] = new this.Cave();
		this.grid[x][y].init();
		break;
	    case 2: this.grid[x][y] = new this.Town();
		this.grid[x][y].init();
		break;
	    case 3: this.grid[x][y] = new this.Desert();
		this.grid[x][y].init();
		break;
	    case 4: this.grid[x][y] = new this.Castle();
		this.grid[x][y].init();
		break;
	    case 5: this.grid[x][y] = new this.Sea();
		this.grid[x][y].init();
		break;
	    }
	}
	return false; //FAIL
    }

    //checks to see if the given coordinate is valid within the grid
    this.isValidSlot = function(x, y) {
	return (x < 0 || y < 0 || x >= this.gridSize || y >= this.gridSize || isNaN(x) || isNaN(y)) ? false : true;
    }

    //checks to see if this terrain slot has been instantiated
    this.exists = function(x, y) {
	return (this.grid[x][y] == null) ? false : true;
    }
    
}

module.exports = new TerrainHandler();
