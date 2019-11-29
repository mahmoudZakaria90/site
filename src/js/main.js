var header = require("./header");

function updateDate() {
  document.getElementById("date").innerHTML = new Date().getFullYear();
}

window.addEventListener("DOMContentLoaded", function() {
  header();
  updateDate();
});
