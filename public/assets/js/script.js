
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
    });
    
    $('#login-button').on('click', function() {
        $('.login-modal').css('display', 'block');
    });
    

});



