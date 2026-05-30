function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function openContact() {
  const popup = document.getElementById("contactPopup");
  popup.classList.add("active");
}

function closeContact() {
  const popup = document.getElementById("contactPopup");
  popup.classList.remove("active");
}

window.addEventListener("click", function (event) {
  const popup = document.getElementById("contactPopup");

  if (event.target === popup) {
    closeContact();
  }
});