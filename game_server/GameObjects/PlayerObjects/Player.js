
// Main player object responsible for handling interactions with and changes with player during gameplay
function Player() {
    this.Inventory = require('../ItemObjects/Inventory.js');
    this.statMultiplier = 10;

    
    // Basic fields
    this.name;
    this.level;
    this.exp;
    this.pClass;
    this.cNum;

    // Attributes
    this.att;		   // Used for dmg calculation
    this.hp;
    this.def;
    this.agi;   // Agility/Evasion
    this.conf;  // Confidence, used for merchant discount

    //potion-boosted stats
    this.boostedAtt;
    this.boostedDef;

    this.init = function(playerName, c){
        //init type things
        this.name = playerName;
        this.cNum = c;
        switch(this.cNum) {      //Import class
            case 0:
                this.pClass = require('./Executioner.js');
                break;
            case 1:
                this.pClass = require('./Knight.js');
                break;
            case 2:
                this.pClass = require('./Prince.js');
                break;
            case 3:
                this.pClass = require('./Princess.js');
                break;
            case 4:
                this.pClass = require('./Slave.js');
                break;
            case 5:
                this.pClass = require('./Thief.js');
                break;
            default:
        }

	//set the initial/default stats
	this.att = this.pClass.baseStats.att * this.statMultiplier;
	this.hp = this.pClass.baseStats.hp * this.statMultiplier;
	this.def = this.pClass.baseStats.def * this.statMultiplier;
	this.agi = this.pClass.baseStats.agi * this.statMultiplier;
	this.conf = this.pClass.baseStats.conf * this.statMultiplier;

	//console.log(this.att, this.hp, this.def, this.agi, this.conf, "Woohoo");
	
	this.boostedAtt = this.att;
	this.boostedDef = this.def;
	
	this.Inventory.init();
    }

    this.updateStats = function(mods){ //NEED TO GET TERRAIN MODIFIERS
        this.att = this.pClass.baseStats.att  * this.statMultiplier + mods.attack * this.statMultiplier;
        this.hp = this.pClass.baseStats.hp  * this.statMultiplier;
        this.def = this.pClass.baseStats.def  * this.statMultiplier + mods.defense * this.statMultiplier;
        this.agi = this.pClass.baseStats.agi * this.statMultiplier + mods.agility * this.statMultiplier;
        this.conf = this.pClass.baseStats.conf * this.statMultiplier + mods.conf * this.statMultiplier;
    }

    this.pLocation = {   //Location of player
        xCoor:0,
        yCoor:0
    };

    this.pMove = function(x, y) {
        //MATH.ABS
        if (Math.abs(x - this.pLocation.xCoor) < 2 && Math.abs(y - this.pLocation.yCoor) < 2){
            this.setPLocation(x, y)
            return true;
        }else{
            return false;     // Err: Cannot move player more than 1 block
        }
    }


    /* Field getters and setters */
    this.getPLocation = function() {
        return this.pLocation;
    }

    this.setPLocation = function(x, y) {
        this.pLocation.xCoor = x;
        this.pLocation.yCoor = y;
    }

    this.getName = function() {
        return this.name;
    }

    this.setName = function(name) {
        this.name = name;
    }

    //Get class num
    this.getCNum = function() {
        return this.cNum;
    }

    //get class
    this.getClass = function() {
	return this.pClass;
    }

    this.getLevel = function() {
        return this.level;
    }

    this.setLevel = function(level) {
        this.level = level;
    }

    this.getExp = function() {
        return this.exp;
    }

    this.setExp = function(exp){
        this.exp = exp;
    }

    // Attribute Getter/Setters

    this.getAtt = function() {
        return this.att;
    }

    this.setAtt = function(att) {
        this.att = att;
    }

    this.getHp = function() {
        return this.hp;
    }

    this.setHp = function(hp) {
        this.hp = hp
    }

    this.getDef = function() {
        return this.def;
    }

    this.setDef = function(def) {
        this.def = def;
    }

    this.getAgi = function() {
        return this.agi;
    }

    this.setAgi = function(agi) {
        this.agi = agi;
    }

    this.getConf = function() {
        return this.conf;
    }

    this.setConf = function(conf) {
        this.conf = conf;
    }

    this.getBoostedAtt = function() {
	return this.boostedAtt;
    }
    
    this.pay = function(amount) {
	return this.Inventory.spend(amount);
    }

    this.acquire = function(item) {
	if(item != null)
	    this.Inventory.add(item);
    }

    this.usePotion = function(type) {
	return this.applyStatBoost(this.Inventory.use(type));
    }

    this.getInventory = function() {
	return this.Inventory;
    }
    
    this.applyStatBoost = function(stats) {
	if(stats == null) return;
	if(this.hp + stats.hp > this.pClass.baseStats.hp) {
	    this.hp = this.pClass.baseStats.hp * this.statMultiplier;
	} else {
	    this.hp = this.hp + (stats.hp * this.statMultiplier);
	}
	
	this.boostedAtt = this.att + stats.att * this.statMultiplier;
	this.boostedDef = this.def + stats.def * this.statMultiplier;
	
	if(this.boostedAtt > this.att || this.boostedDef > this.def) {
	    //if we've used anything other than a health potion we want to apply a time limit
	    this.potionTime = 10; //ten turns
	    return "Used potion - you have a boost for ten turns";
	}
	return "Used Health poition - healed 200 health!";
    }

    //for testing purposes
    this.dumpInventory = function() {
	this.Inventory.dump();
    }

    //for testing purposes
    this.dumpPlayerInfo = function() {
	console.log("Attack: " + this.att);
	console.log("Defense: " + this.def);
	console.log("Hitpoints: " + this.hp);
	console.log("Agility: " + this.agi);
	console.log("Confidence: " + this.conf);

	console.log("Boosted attack: " + this.boostedAtt);
	console.log("Boosted defense: " + this.boostedDef);
	console.log("Class/Classnum: " + this.cNum + "/" + this.pClass.name);
    }
}


module.exports = new Player();
