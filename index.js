let menuIcon = document.querySelector(".menu_icon");
let closeMenu = document.querySelector(".close_icon");
let dropDown = document.getElementById("navBar");

menuIcon.addEventListener("click", () => {
  dropDown.style.display = "block";

  menuIcon.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  dropDown.style.display = "none";
  menuIcon.style.display = "block";
  closeMenu.style.display = "none";
});
