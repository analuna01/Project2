$(document).ready(function () {
    $(".start").on("click", function (event) {
        event.preventDefault();
        var image = "animals";
        // var image = $("#imageCategory").val();
        var apiKey = "18605581-58ec698117cf49e422fb065c5";

        // AJAX for Animals Category:

        $.ajax({
            url: `https://pixabay.com/api/?key=${apiKey}&q=travel&image_type=photo`,
            method: "GET",
            "resize": {
                "width": 100,
                "height": 75,
                "strategy": "crop"
            }
        }).then(function (response) {
            // $(".image").html("<h1>" + response.name + "</h1>");
          console.log(response);
        });

        // // AJAX for Food Category:

        // $.ajax({
        //     url: "https://pixabay.com/api/" + encodeURIComponent(image) + ",Burundi&appid=" + apiKey,
        //     method: "GET",
        //     "resize": {
        //         "width": 100,
        //         "height": 75,
        //         "strategy": "crop"
        //     }
        // }).then(function (response) {

        // })

        // // AJAX for Science Category:

        // $.ajax({
        //     url: "https://pixabay.com/api/" + encodeURIComponent(image) + ",Burundi&appid=" + apiKey,
        //     method: "GET",
        //     "resize": {
        //         "width": 100,
        //         "height": 75,
        //         "strategy": "crop"
        //     }
        // }).then(function (response) {

        // })

        // // AJAX for Sports Category:

        // $.ajax({
        //     url: "https://pixabay.com/api/" + encodeURIComponent(image) + ",Burundi&appid=" + apiKey,
        //     method: "GET",
        //     "resize": {
        //         "width": 100,
        //         "height": 75,
        //         "strategy": "crop"
        //     }
        // }).then(function (response) {

        // })


    })

});

