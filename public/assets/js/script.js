<<<<<<< HEAD
$.ajax({
  url: "https://ws.adanta.mx/api/animals/ById/1",
  type: "GET",
  dataType: "json",
  success: function (animal) {
    console.log(animal);
    var image = document.getElementById("img1");
    image.setAttribute("src", animal.url);
    image.setAttribute("style", "width: 256px;");
  },
});
=======
$(function() {
    
    $('#create-account-button').on('click', function() {
        
    });
    

});
>>>>>>> 5ea0f5e86778b1e49b585f0c5f2e6fcc694cc19a
