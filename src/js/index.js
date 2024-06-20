const button = document.getElementById("button");
const buttonClose = document.getElementById("buttonCloseId");
const modalWrapper = document.getElementById("modalWrapperId");

button.addEventListener("click", () => {
  modalWrapper.style.display === "none"
    ? (modalWrapper.style.display = "flex")
    : (modalWrapper.style.display = "none");
});

buttonClose.addEventListener("click", () => {
  modalWrapper.style.display === "flex"
    ? (modalWrapper.style.display = "none")
    : (modalWrapper.style.display = "flex");
});
