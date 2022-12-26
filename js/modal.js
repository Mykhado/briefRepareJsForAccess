let modal = document.getElementById("modalWindow");
let openButton = document.getElementById("openMod");

document.addEventListener("DOMContentLoaded", () => {
  var focusable = modal.querySelectorAll(
    'button, [href], [tabindex]:not([tabindex="-1"])'
  );

  var firstFocusable = focusable[0];
  var lastFocusable = focusable[focusable.length - 1];
  console.log(focusable);
  openButton.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "flex";
  });

  firstFocusable.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
    openButton.focus();
  });
  firstFocusable.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.which === 9) {
      event.preventDefault();
      lastFocusable.focus();
    }
  });
  lastFocusable.addEventListener("keydown", (event) => {
    // modal.style.display = 'flex';
    if (event.which === 9 && !event.shiftKey) {
      event.preventDefault();
      firstFocusable.focus();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.which === 27) {
      event.preventDefault();
      modal.style.display = "none";
      openButton.focus();
    }
  });
});
