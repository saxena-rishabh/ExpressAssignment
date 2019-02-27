var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, Welcome to my assignment");
});

app.get("/speak/pig", function(req,res){
    res.send("The pig says 'Oink' ");
});

app.get("/speak/cow", function(req,res){
    res.send("The cow says 'Moo' ");
});


app.get("/speak/dog", function(req,res){
    res.send("The dog says 'Woof Woof!' ");
});

app.get("/repeat/:var1/:num", function(req, res){
    var variable = req.params.var1;
    var i = req.params.num;
    
    var k=1;
    for(k=1;k<=i; k++){
        res.send(variable);
    }
});





app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!!!");
});