'use strict'; // ?
var mongoose = require('mongoose');
var Games = mongoose.model('gameSchema');


// 'get /games' 
exports.getAllGames = function(req, res) {
  // empty search params returns all games. 
  Games.find({}, (err, data) => {
    if (err) console.error(err); 
    res.send(data); 
  })
};

// post '/games'
exports.addAGame = function(req, res) {
  var newGame = new Games(req.body);
  newGame.save(function(err, game) {
    if (err) {res.send(err)};
    res.send(game);
  });
};


// get 'games/:id'
exports.updateGame = function(req, res) {
  // updates the game with the given :id
  Games.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, games) {
    if (err) {res.send(err)};
    res.send(games);
  });
};

// get 'games/:id'
exports.getAGame = function(req, res) {
  Games.findById(req.params.id, function(err, game) {
    if (err) {res.send(err)};
    res.send(game);
  });
}


// delete '/games:id'
exports.deleteGame = function(req, res) {
  // deletes a game and console.logs that it was deleted. 
  Games.remove (
    {id : req.params.id}, 
    (err, games) => {
      if (err) {res.send(err)}
      else {
      res.send(`${Games} successfully deleted`)
      }
    }
  )
}
