

/* Game Object Setup */
var GameHandler = require('./GameObjects/GameHandler.js');


/* Server Setup */
var express = require('express'),
bodyParser = require('body-parser'),
app = express();

app.use(bodyParser.json());

app.get('/Game',function(req,res){

    
    res.end();	
});

app.listen(3000,function(){
    console.log("Listening on port 3000");
});
