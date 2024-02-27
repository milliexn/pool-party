function scrollToHead() {
    document.documentElement.scrollTop = 0;
}

var html_theme = document.querySelector("html");
html_theme.style.transition = "0.4s";
var pageTheme = localStorage.getItem("pageTheme");
var toggleState = localStorage.getItem("toggleState");
if (pageTheme == null)
    pageTheme = "dark";
if (toggleState == null)
    toggleState = false;
function toggleMode() {
    var checkBox = document.getElementById("mode_checkbox");
    if (checkBox.checked == true) {
        pageTheme = "light";
        toggleState = true;
    }
    else {
        pageTheme = "dark";
        toggleState = false;
    }
    html_theme.setAttribute("data-theme", pageTheme);
    localStorage.setItem("pageTheme", pageTheme);
    localStorage.setItem("toggleState", toggleState);
}

let checkBox2;

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector('.header');
    fetch('./header.html')
        .then(res => res.text())
        .then(data => {

            header.innerHTML = data;
            checkBox2 = header.querySelector('#mode_checkbox');
            if (toggleState == "true") {
                checkBox2.checked = true;
            }
            else {
                checkBox2.checked = false;
            }
        })
    const footer = document.querySelector('.footer');
    fetch('./footer.html')
        .then(res => res.text())
        .then(data => {
            footer.innerHTML = data;
            footer.querySelector("#rights-information").innerHTML = "&copy;" + (new Date().getFullYear()) + " Pool Party &copy; Pool Party Inc. All rights reserved.";
        })
});


window.onload = function () {
    html_theme.setAttribute("data-theme", pageTheme);
    // document.getElementById("preloader").style.visibility="hidden";
    // document.body.style.visibility = "visible";
    setTimeout(function () {
        document.getElementById("preloader").style.visibility = "hidden";
        document.body.style.visibility = "visible";
    }, 200);
}



let rData = [
    '"Pool Party: Making traffic jams feel like poolside gatherings!" - Amy',
    '"Carpooling just got cool with Pool Party!" - Mike',
    '"Pool Party: Where saving the planet meets making friends." - Lily',
    '"Efficient, eco-friendly, and enjoyable—thanks, Pool Party!" - Max',
    '"Pool Party turns commute woes into shared adventures!" - Jenna',
    '"Who knew carpooling could be this much fun? Thanks, Pool Party!" - Tom',
];

let reviews = document.getElementById("public-reviews");
document.addEventListener("DOMContentLoaded", function () {
    rData.forEach((article, key) => {
        const articleDiv = document.createElement("p");
        reviews.appendChild(articleDiv);
    });

    for (var i in rData) {
        reviews.getElementsByTagName('p')[i].innerHTML = rData[i];
    }
});
