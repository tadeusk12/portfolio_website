$(document).ready(function(){
	$('.header').height($(window).height());
})

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

const toggleButton = document.querySelector("#toggle-button");
const toggleText = document.querySelector("#toggle-text");
const toggleLogo = document.querySelector("#toggle-logo");

toggleButton.addEventListener("click", function() {
  if (toggleText.style.display === "none") {
    toggleText.style.display = "block";
    toggleLogo.setAttribute("src", "your-logo-up.png");
  } else {
    toggleText.style.display = "none";
    toggleLogo.setAttribute("src", "your-logo.png");
  }
});

function expandCard(card) {
  var expandedContent = card.querySelector(".expanded-content");
  if (expandedContent.style.display === "none") {
    expandedContent.style.display = "block";
  } else {
    expandedContent.style.display = "none";
  }
}