window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("navbar").style.padding = "2px 2px";
    } else {
        document.getElementById("navbar").style.padding = "30px 10px";
    }
}



