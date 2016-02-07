
var GameHandler = require('./GameObjects/GameHandler.js');

//GameHandler.terrainTest();
GameHandler.init("Vuk Petrovic", 0);
//GameHandler.playerTest();

if(GameHandler.setCurrentMerchant()) {
    GameHandler.playerTest();
    GameHandler.handlePurchase("Attack Potion");
    GameHandler.playerTest();    
}
