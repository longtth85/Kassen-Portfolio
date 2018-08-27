let titles = ["gone", "jns", "experimental", "livate", "encore",
"grater", "devil", "showreel", "gh4", "midsummer", "2014"];
// This function loads and injects all the repeatable elements
$(function () {
    $(".nav").load("navbar.html");
    $.get("projectGrid.html", {}, function (data) {
        for (let i=0; i<titles.length; i++){
            let $response = $("<div />").html(data);
            $response.find(".overlay").attr("id", titles[i]);
            $response.find(".overlay-text").text(titles[i]);
            $(".grid-container").append($response);
        };

    });

});

function videoLoad(id) {
    let text = $("h2").text().split(" ");
    let test = text[0].toLowerCase();
    // If the video has already been loaded then there is no need to reload it
    if (id === test){
        return false
    }
    // Load the target html into the div with class video and scroll to the video
    else {
        $(".video").load("work/" + id + ".html");

        $('html, body').animate({
            scrollTop: $("div.video").offset().top
        }, 500);
    }
};