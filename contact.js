

let slide = document.querySelectorAll('.slide');
var current = 0;


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.09)";
        document.getElementById("navbar").style.backdropFilter = "blur(6px)";
        document.getElementById("navbar").style.borderBottom= "1px solid rgba(255, 255, 255, 0.16)";
    } else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.backdropFilter = "none";
        document.getElementById("navbar").style.borderBottom = "none";
    }
}        
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

