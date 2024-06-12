window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("navbar").style.padding = "2px 2px";
    } else {
        document.getElementById("navbar").style.padding = "30px 10px";
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const responMenu = document.querySelector(".respon");

    menuToggle.addEventListener("click", function() {
        if (responMenu.style.display === "flex") {
            responMenu.style.display = "none";
        } else {
            responMenu.style.display = "flex";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".close-toggle");
    const responClose = document.querySelector(".respon");

    menuToggle.addEventListener("click", function() {
        if (responClose.style.display === "flex") {
            responClose.style.display = "none";
        } else {
            responClose.style.display = "flex";
        }
    });
});