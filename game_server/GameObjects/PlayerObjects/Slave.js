
function Slave() {
    this.baseStats = {
        att:  10
        hp:   10
        def:  20
        agi:  10
        conf: 10


    }

    this.weaponList = [
  {
      "name": "Shackles",
      "description": "Old shackles, perfect for strangling.",
      "att": 5
  },
  {
      "name": "Whip",
      "description": "His master's old whip.",
      "att": 10
  },
  {
      "name": "Chains",
      "description": "The chains his family was tied up with.",
      "att": 15
  }
    ];

    this.levelUp = function(){
        this.baseStats.att += 5;
        this.baseStats.hp += 5;
        this.baseStats.def += 5;
        this.baseStats.agi += 5;
    }

    this.upgradeWeapon = function() {

    }





}

module.exports = new Slave();
