
/*
  The combat handler takes care of all the combat logic for the game - it updates life totals, etc. 
*/

function CombatHandler() {
    this.you = null;
    this.opponent = null;
    this.inCombat = false;

    this.init(you, opponent) {
	this.you = you;
	this.opponent = opponent;
	this.inCombat = true;
    }

    //goes through the actual combat - preference goes to the player
    this.combatPhase = function(details) {
	var result = {};
	var combatDetails = "";
	if(details != null) {
	    //you attacks opponent here
	    combatDetails += "You swing your weapon at the enemy dealing ";
	    //calculate damage
	    var youDamage = this.you.getBoostedAtt();
	    this.opponent.stats.hp -= youDamage;
	    if(this.opponent.stats.hp <= 0) {
		result.status = "opponent died";
		return result;
	    }
	    
	    combatDetails += youDamage + "! ";
	}

	//opponent attacks you here -IF- it's not dead yet
	combatDetails += "The " + this.opponent.type + " attacks you, dealing ";

	//calculate damage here
	var oDamage = this.opponent.stats.attack;
	this.you.setHp(this.you.getHp() - oDamage);
	if(this.you.getHp() <= 0) {
	    result.status = "you died";
	    return result;
	}
	
	combatDetails += oDamage + "!";

	result.combatDetails = combatDetails;
	return combatDetails;
    }

    this.reset = function() {
	this.inCombat = false;
	this.you = null;
	this.opponent = null;
    }

    this.isInCombat = function() {
	return this.inCombat;
    }

    this.getOpponent = function() {
	return this.opponent;
    }
}

module.exports = new CombatHandler();
