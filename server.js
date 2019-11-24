var express = require("express");
var path = require("path");
var data = require("./app/data/friends");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res){
    res.json(data.friends);
})

app.listen(PORT, function(){
    console.log("App listening on Port " + PORT);
});