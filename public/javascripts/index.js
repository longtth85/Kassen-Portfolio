// This function loads and injects all the repeatable elements
$(function () {
    $(".nav").load("navbar.html");
    $(".footer").load("footer.html");
});

// Titles for videos page
const index = ["Alexander Rybak - That's how you write a song(Music Video)", "Madcon - Drimmedua(Music Video)",
    "Madcon - Shoo og Ting & Tang ft. Arif(Music Video)",
    "Gone Forever - The Thor Thorsen(Music Video)", "Jns - Spill(Music Video)", "EXPERIMENTAL",
    "LIVATE - THE DAY(Music Video)", "JNS - GRÅTER UTEN TÅRER(Music Video)",
    "I SAW THE DEVIL IN MIAMI...(EXPERIMENTAL)", "OLA KASSEN - SHOWREEL 2016", "DISTORTED LIFESTLYE - GH4",
    "SWEDISH MIDSUMMER LOS 2015 (OFFICIAL AFTERMOVIE)", "2014",
     "Erik Og Kriss - Leker deilig", "GinoBless - Ojeheianne(Music Video)"];

let path = window.location.pathname;
console.log(path);
let pathTitle = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
console.log(pathTitle);

let titles = [];
if (pathTitle === "/"){
    titles = index;
}else {
    titles = eval(pathTitle);
}

// This function loads and injects all the repeatable elements
$(function () {
    $.get("projectGrid.html", {}, function (data) {
        for (let i=0; i<titles.length; i++){
            let $response = $("<div />").html(data);
            $response.find(".overlay").attr("id", titles[i]);
            $response.find(".overlay-text").text(titles[i]);
            $response.find(".grid-item").css("background-image", "url("+"'static/"+encodeURI(titles[i])+".png')");
            $(".grid-container").append($response);
        };
    });
});



$(document).on("click", ".overlay", function () {
    console.log("working");
    /*let text = $("h2").text().split(" ");*/
    /*let test = text[0].toLowerCase();*/
    console.log("url(static/"+encodeURIComponent(titles[0])+".png)")
    let test = $("h2").text();
    console.log(test);
    let text = "work/" + this.id +".html";

    // If the video has already been loaded then there is no need to reload it
    if (this.id === test){
        return false
    }
    // Load the target html into the div with class video and scroll to the video
    else {
        /*$(".video").load("work/" + test1 + ".html");*/
        $(".video").load(encodeURIComponent(text));

        $('html, body').animate({
            scrollTop: $("div.video").offset().top
        }, 500);
    }
});