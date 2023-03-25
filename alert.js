const showButton = document.querySelectorAll("show-alerts-btn");

const closeButton = document.querySelectorAll("data-close-btn");


var modal = document.getElementById("data-close-btn").addEventListener("click", closeFunction);
    closeButton();

function closeButton() {
    document.getElementById("data-close-btn").style.display = "none";

}
document.getElementById("show-alerts-btn").addEventListener("click", displayFunction);

