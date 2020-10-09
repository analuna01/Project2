// AJAX calls to choose category of memory game and pictures to display:

// $(document).ready(function () {
//     $(".start").on("click", function (event) {
//         event.preventDefault();
//         var image = "animals";
//         // var image = $("#imageCategory").val();
//         var apiKey = "18605581-58ec698117cf49e422fb065c5";

//         // AJAX for Travel Category:

//         $.ajax({
//             url: `https://pixabay.com/api/?key=${apiKey}&q=travel&image_type=photo`,
//             method: "GET",
//             "resize": {
//                 "width": 160,
//                 "height": 160,
//                 "strategy": "crop"
//             }
//         }).then(function (response) {
//             // $(".image").html("<h1>" + response.name + "</h1>");
//           console.log(response);
//         });

//         // // AJAX for Food Category:

//         $.ajax({
//             url: `https://pixabay.com/api/?key=${apiKey}&q=food&image_type=photo`,
//             method: "GET",
//             "resize": {
//                 "width": 160,
//                 "height": 160,
//                 "strategy": "crop"
//             }
//         }).then(function (response) {

//         })

//         // // AJAX for Animals Category:

//         $.ajax({
//             url: `https://pixabay.com/api/?key=${apiKey}&q=animals&image_type=photo`,
//             method: "GET",
//             "resize": {
//                 "width": 160,
//                 "height": 160,
//                 "strategy": "crop"
//             }
//         }).then(function (response) {

//         })

//         // // AJAX for Sports Category:

//         $.ajax({
//             url: `https://pixabay.com/api/?key=${apiKey}&q=sports&image_type=photo`,
//             method: "GET",
//             "resize": {
//                 "width": 160,
//                 "height": 160,
//                 "strategy": "crop"
//             }
//         }).then(function (response) {

//         })


//     })

// });

