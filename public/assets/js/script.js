// This code may not get used...

// $.ajax({
//   url: "https://ws.adanta.mx/api/animals/ById/1",
//   type: "GET",
//   dataType: "json",
//   success: function (animal) {
//     console.log(animal);
//     var image = document.getElementById("img1");
//     //The code bellow throws errors of undefined
//     // image.setAttribute("src", animal.url);
//     // image.setAttribute("style", "width: 256px;");
//   },
// });


$(function() {
    // Display account create modal on click
    $('#create-account-button').on('click', function(event) {
        event.preventDefault();
        $('.create-modal').css('display', 'block');
        console.log('Modal Open');

        $('.cancel-button').on('click', function(event) {
          event.preventDefault();
          $('.create-modal').css('display', 'none');
          $('.login-modal').css('display', 'none');
          console.log('Modal closed');
      });
    });
    

    // New Account Creation
    $("#create-submit-button").click(function (event) {
      event.preventDefault();

      var email = $("#new-email").val();
      var username = $("#create-username").val();
      var password = $("#create-pwd").val();
      var confirmPassword = $("#confirm-pwd").val();

      if (email === "") {
        alert("Email cannot be blank.");
        return false;
      }

      if (username === "") {
        alert("Username cannot be blank.");
        return false;
      }

      if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
      }

      if (password === "") {
        alert("Password cannot be blank");
        return false;
      }

      var newUser = {
        email: email,
        username: username,
        password: password
      }

      console.log(newUser);

      // Post Request to send new user data
      $.ajax("/api/users", {
        type: "POST",
        data: newUser
      })
      .then(function(){
        console.log('New User Sent');
        $('#new-account-form').reset();
        $('.create-modal').css('display', 'none');
      });

    });

    // Log in button functionality
    $('#login-button').on('click', function() {
        $('.login-modal').css('display', 'block');
        console.log('Modal Open');
    });

    // Existing user creation
    $("#login-submit-button").click(function (event) {
      event.preventDefault();

      var username = $("#login-username").val();
      var password = $("#login-pwd").val();

      if (username === "") {
        alert("Username cannot be blank.");
        return false;
      }

      if (password === "") {
          alert("Passwords is blank.");
          return false;
      }
      
      var existingUser = {
        username: username,
        password: password
      }

      console.log(existingUser);

      // Post Request to send new user data
      $.ajax("/api/users", {
        type: "GET",
        data: existingUser
      })
      .then(function(response){
        console.log('User Logged in as: ' + response);
        $('#login-form').reset();
        // $('.login-modal').css('display', 'none');
      });

    });
    

});