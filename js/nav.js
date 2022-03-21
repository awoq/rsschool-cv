function addNavClass() {
    let navClass = document.getElementById("nav");
    if (navClass.className === "nav") {
        navClass.className += " responsive";
    } else {
        navClass.className = "nav";
    }
}