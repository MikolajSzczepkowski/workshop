document.addEventListener("DOMContentLoaded", function() {
  var gallery = document.querySelector(".gallery-img"),
      prevButton = document.querySelector("#buttonPrev"),
      nextButton = document.querySelector("#buttonNext"),
      list = gallery.querySelectorAll("li"),
      currentPicture = 0;

  prevButton.addEventListener("click", function() {
    list[currentPicture].classList.add("hide");
    currentPicture --;
    if (currentPicture < 0) {
      currentPicture = 0;
    }
    list[currentPicture].classList.remove("hide");
  });
  nextButton.addEventListener("click", function() {
    list[currentPicture].classList.add("hide");
    currentPicture ++;
    if (currentPicture >= list.length) {
      currentPicture = list.length -1;
    }
    list[currentPicture].classList.remove("hide");
  });
});
