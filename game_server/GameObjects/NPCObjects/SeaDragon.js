
/*
  SeaDragon NPC
*/

var SeaDragon = function() {
    this.stats = {
  "level": 9,
  "att": 150,
  "def": 100,
  "hp": 750,
  "hostile": true
    };
    this.type = "monster";
    this.description = "The ruler of the great seas, when you enter his domain there is no escape.";

    this.getDescription = function() {
	return this.description;
    }

    this.getStats = function() {
	return this.stats;
    }
}

module.exports = SeaDragon;
