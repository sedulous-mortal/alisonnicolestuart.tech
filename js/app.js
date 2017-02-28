$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
});

$(document).ready(function () {
    $('.carousel-notFullWidth').carousel();
});

function makeSlide() {
    document.getElementById('hiRunner').className = "slider";
    document.getElementById('topBox').setAttribute("class", "lightBlue topBox");
}

function contactMe() {
    makeSlide();
    document.getElementById('choiceBox').innerHTML = ("<div id=\"contactChoice\"><p id=\"hearBack\">I look forward to hearing from you!</p><a href=\"https://www.linkedin.com/in/alison-n-stuart\"><img src=\"./imgs/linkedIn.png\"></a><a href=\"mailto:alisonnicolestuart@gmail.com?Subject=Saw%20Your%20Website\"><img src=\"./imgs/gmail.gif\"></a></div>");
}