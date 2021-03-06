'use strict'; // ?

// we have a ton of routes, so we seperated the controller and routes files. 
// each of these routes has reference to a helper function that exists in a 
// controller file. To see what happens at a given endpoint, look up the appro-
// priate controller file and find the matching helper function. We are using 
// MLab as a database. See Seamus for the user/pass.


module.exports = function(app) {
  // these just align each prefix to a file. 
  var user = require('../controllers/userController.js');
  var game = require('../controllers/gameController.js');
  var test = require('../controllers/testController.js');
  var algorithms = require('../controllers/algorithmController.js');

  // routes for game:
  app.get('/users', user.getAllUsers)
  app.post('/users', user.addAUser); // sign-up
  app.post('/users/auth', user.authUser) // log-in

  // routes to handle getting and updating specific user. 
  app.get('/users/:username', user.getSpecificUserData)
  app.put('/users/:username', user.updateUserData)
  app.delete('/users/:username', user.deleteUser)

  // routes for games:
  app.get('/games', game.getAllGames)
  app.post('/games', game.addAGame);

  app.put('/games/:id', game.updateGame)
  app.get('games/:id', game.getAGame)
 
  app.delete('/games/:id', game.deleteGame)

  // routes algorithms: 
  app.get('/algos', algorithms.getAllAlgorithms)
  app.post('/algos', algorithms.addAlgorithm);

  // gameFrame (client/gamesList/GameFrame) is running this. 
  app.get('/algos/:id', algorithms.getSpecifiedAlgorithm)
  app.put('/algos/:id/:property/:newValue', algorithms.updateAlgoProperty)

  app.put('/algos/:id', algorithms.updateSubmissionHistory)
  app.delete('/algos/:id', algorithms.deleteAlgorithm)

  //routes to perform tests of evaluated code
  app.post('/test', test.getSubmissionEvaluation)
};