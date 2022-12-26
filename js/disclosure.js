let discButton = document.getElementById("useDsicl");
let disclosure = document.getElementById("disclosureWindow");

document.addEventListener("DOMContentLoaded", () => {
  discButton.addEventListener("click", (e) => {
    disclosure.classList.toggle("active");
  });
});
