function responsiveNav() {
    var menuItems = document.getElementById("menu-items");
    if (menuItems.className === "menu-items") {
        menuItems.className += " nav-active";
    } else {
        menuItems.className = "menu-items";
    }
}