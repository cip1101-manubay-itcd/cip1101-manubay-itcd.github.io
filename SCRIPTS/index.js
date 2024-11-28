// Make navigation bar responsive.
function responsiveNav() {
    var navbar = document.getElementById("top-nav");

    if (navbar.className === "top-nav") {
        navbar.className += " responsive";
    } else {
        navbar.className = "top-nav";
    }
}