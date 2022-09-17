let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectButtons = document.querySelectorAll(".plan .plan__button");
let negativeResponseButton = document.querySelector(
  ".modal .modal__action--negative"
);

for (button of selectButtons) {
  button.addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

negativeResponseButton.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});
