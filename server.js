var express = require("express");
var path = require("path");
var data = require("./app/data/friends");
var friends = data.friends;

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
    res.json(friends);
})

app.post("/api/friends", function(req, res){
    const person = req.body;
    console.log(person);
    var matching = findFriend(person);
    friends.push(person);
    res.json(matching);
});

var findFriend = function(person){
    let minDifference= 500;
    let matchedFriend = {};
    for(var i = 0; i < friends.length; i++){
        let difference = 0;
        for (var j = 0; j < friends[i].scores.length; j++){
            difference += Math.abs(friends[i].scores[j] - person.scores[j]);
        }
        if (difference < minDifference){
            minDifference = difference;
            matchedFriend = friends[i];
        }
    }
    return matchedFriend;
}

app.listen(PORT, function(){
    console.log("App listening on Port " + PORT);
});