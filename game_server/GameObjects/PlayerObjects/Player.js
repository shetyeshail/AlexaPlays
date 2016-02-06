
// Main player object responsible for handling interactions with and changes with player during gameplay
function Player() {

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

    this.init = function(playerName, c){
        //init type things
        this.name = playerName;
        this.cNum = c;
        switch(cNum) {      //Import class
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
    }

    this.updateStats = function(mods){ //NEED TO GET TERRAIN MODIFIERS
        this.att = pClass.baseStats.att + mods.attack;
        this.hp = pClass.baseStats.hp;
        this.def = pClass.baseStats.def + mods.defense;
        this.agi = pClass.baseStats.agi + mods.agility;
        this.conf = pClass.baseStats.conf + mods.conf;
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
        return cNum;
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

}
