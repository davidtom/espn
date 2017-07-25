// Initialize

$(function() { // on document ready
  teamsController = new TeamsController();
  teamsController.init();
  playersController = new PlayersController();
  playersController.init();
});
