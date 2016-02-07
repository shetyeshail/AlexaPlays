
/*
  Main terrain handler object responsible for manipulating and setting up the terrain grid and environments.
*/

function TerrainHandler() {
    this.grid = [[], [], [], [], [], [], [], [], [], []];
    this.gridSize = 10; //good default
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

	this.setLocalTerrains();
    }

    //keep track of player position 
    this.setPlayerPosition = function(x_coor, y_coor) {
	if(this.isValidSlot(x_coor, y_coor)) {
	    this.playerPos = {
		x: x_coor,
		y: y_coor
	    }
	    this.setLocalTerrains();
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

    //sets up the terrains around the player if needed
    this.setLocalTerrains = function() {
	//initialize terrains around and on the player position
	if(this.isValidSlot(this.playerPos.x - 1, this.playerPos.y - 1) && !this.exists(this.playerPos.x - 1, this.playerPos.y - 1)) {
	    this.setTerrain(this.playerPos.x - 1, this.playerPos.y - 1);  //top left
	}
	if(this.isValidSlot(this.playerPos.x, this.playerPos.y - 1) && !this.exists(this.playerPos.x, this.playerPos.y - 1)) {
	    this.setTerrain(this.playerPos.x, this.playerPos.y - 1);  //top
	}
	if(this.isValidSlot(this.playerPos.x + 1, this.playerPos.y - 1) && !this.exists(this.playerPos.x + 1, this.playerPos.y - 1)) {
	    this.setTerrain(this.playerPos.x + 1, this.playerPos.y - 1);  //top right
	}
	if(this.isValidSlot(this.playerPos.x - 1, this.playerPos.y) && !this.exists(this.playerPos.x - 1, this.playerPos.y)) {
	    this.setTerrain(this.playerPos.x - 1, this.playerPos.y);  //left
	}
	if(this.isValidSlot(this.playerPos.x, this.playerPos.y) && !this.exists(this.playerPos.x, this.playerPos.y)) {
	    this.setTerrain(this.playerPos.x, this.playerPos.y);  //center
	}
	if(this.isValidSlot(this.playerPos.x + 1, this.playerPos.y) && !this.exists(this.playerPos.x + 1, this.playerPos.y)) {
	    this.setTerrain(this.playerPos.x + 1, this.playerPos.y);  //bottom left
	}
	if(this.isValidSlot(this.playerPos.x - 1, this.playerPos.y + 1) && !this.exists(this.playerPos.x - 1, this.playerPos.y + 1)) {
	    this.setTerrain(this.playerPos.x, this.playerPos.y + 1);  //bottom
	}
	if(this.isValidSlot(this.playerPos.x + 1, this.playerPos.y + 1) && !this.exists(this.playerPos.x + 1, this.playerPos.y + 1)) {
	    this.setTerrain(this.playerPos.x + 1, this.playerPos.y + 1);  //bottom right 
	}
    }

    //checks to see if the given coordinate is valid within the grid
    this.isValidSlot = function(x, y) {
	return (x < 0 || y < 0 || x >= this.gridSize || y >= this.gridSize || isNaN(x) || isNaN(y)) ? false : true;
    }

    //checks to see if this terrain slot has been instantiated
    this.exists = function(x, y) {
	if(this.grid == null) {
	    return false;
	} else {
	    if(this.grid[x] == null) {
		return false;
	    } else {
		if(this.grid[x][y] == null) {
		    return false;
		} else {
		    return true;
		}
	    }
	}
    }
    
    //returns the terrain at a given location
    this.getTerrain = function(x, y) {
	return (this.isValidSlot(x, y) && this.exists(x, y)) ? this.grid[x][y] : null;
    }

    //for testing, a function that prints out the grid for viewing
    this.terrainDump = function() {
	for(var i = 0; i < 10; i++) {
	    for(var j = 0; j < 10; j++) {
		process.stdout.write("[" + this.grid[i][j].getType() + "]");
		if(j % 10 == 0) {
		    process.stdout.write("\n");
		}
	    }
	}
    }
}

module.exports = new TerrainHandler();
