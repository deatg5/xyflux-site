function ToggleNavMenu() {
    var x = document.getElementById("hidden-menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      document.getElementById("top-bg-header").style.top 
    }
    //start checking if the screen width is over 1050
    setInterval(RemoveHiddenMenu, 100)
}

//the hidden menu remains after changing the width above 1050px after revealing this navbar, so just check if the width is over 1050 and set hidden menu display to none if it is
//(hopefully i find a different way of doing this)
function RemoveHiddenMenu() {
    var w = parseInt(window.innerWidth);

    if (w >= 1050) {
        document.getElementById("hidden-menu").style.display = "none";
    }
}
        


