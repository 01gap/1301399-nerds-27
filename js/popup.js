var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".write-us-pop-up");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var nameApplicant = popup.querySelector("[name=nameApplicant]");
var emailApplicant = popup.querySelector("[name=emailApplicant]");
var commentApplicant = popup.querySelector("[name=commentApplicant]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("write-us-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-show");
});

form.addEventListener("submit", function (evt) {
  if (!nameApplicant.value || !emailApplicant.value || !commentApplicant.value) {
    evt.preventDefault();
    return false;
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
    }
  }
});
