

$(function () {
    function goToHome() {
      $.ajax("/", {
        type: "GET",
      }).then(function(results) {
        window.location.href = "/";
        return results;
      });
    }
    
    function goToGame() {
        $.ajax("/gameboard", {
          type: "GET",
        }).then(function(results) {
          window.location.href = "/gameboard";
          return results;
        });
    }
    
    // Go to Home page
    $("#home-button").click(function (event) {
      event.preventDefault();
      goToHome();
    });
    
    // Go to Leaderboard
    $("#play-button").click(function (event) {
      event.preventDefault();
      goToGame();
    });
  
  });
  