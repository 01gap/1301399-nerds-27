var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".write-us-pop-up");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("write-us-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-show");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !comment.value) {
    evt.preventDefault();
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
