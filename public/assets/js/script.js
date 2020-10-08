
$.ajax({
  url: "https://ws.adanta.mx/api/animals/ById/1",
  type: "GET",
  dataType: "json",
  success: function (animal) {
    console.log(animal);
    var image = document.getElementById("img1");
    //The code bellow throws errors of undefined
    // image.setAttribute("src", animal.url);
    // image.setAttribute("style", "width: 256px;");
  },
});


$(function() {
    // Display account create modal on click
    $('#create-account-button').on('click', function() {
        $('.create-modal').css('display', 'block');
        console.log('Modal Open');
    });

    function validatePassword() {
      // var password = $('#create-pwd').val();
      // var confirmPasssword = $('#confirm-pwd').val();

      console.log('Password test- New Password: ' + password + 'Confirm:' + confirmPasssword);
    }

    $("#create-submit-button").click(function () {
      var password = $("#create-pwd").val();
      var confirmPassword = $("#confirm-pwd").val();
      if (password != confirmPassword) {
          alert("Passwords do not match.");
          return false;
      }
      return true;
    });
    
    $('#login-button').on('click', function() {
        $('.login-modal').css('display', 'block');
    });
    

});



