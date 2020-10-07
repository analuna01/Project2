
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
    
    $('#create-account-button').on('click', function() {
        $('.modal').css('display', 'block');
    });
    

});



