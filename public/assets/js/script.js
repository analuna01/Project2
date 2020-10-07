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
