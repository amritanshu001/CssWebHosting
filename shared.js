let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectButtons = document.querySelectorAll(".plan .plan__button");
let negativeResponseButton = document.querySelector(
  ".modal .modal__action--negative"
);
let menuIcon = document.querySelector(".material-symbols-outlined");
let mobileNav = document.querySelector(".mobile-nav");
let mainHeader = document.querySelector(".main-header");

for (button of selectButtons) {
  button.addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
  if (modal) {
    modal.style.display = "none";
  }
  mobileNav.style.display = "none";
  //mainHeader.style.display = "block";
});

if (negativeResponseButton) {
  negativeResponseButton.addEventListener("click", () => {
    backdrop.style.display = "none";
    modal.style.display = "none";
  });
}

menuIcon.addEventListener("click", () => {
  backdrop.style.display = "block";
  mobileNav.style.display = "block";
  //mainHeader.style.display = "none";
});
