function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  // switch navbar color
  var element = document.getElementById("navbar");
  element.classList.toggle("dark-mode");

  // change the hamburger icon in navbar
  element.classList.toggle("navbar-dark");
}

function switchTranslationButton() {
  const original = "umbrellahack.github.io";
  const currentDomain = window.location.hostname;

  if (currentDomain != original) {
    let element = document.getElementById("translation");
    //change text
    element.innerHTML = "English";
    //change the link
    element.href = "https://" + original;
  }
}
window.onload = (event) => {
  //determine if user prefers dark mode by default
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

  if (prefersDarkMode) {
    toggleDarkMode();
  }

  switchTranslationButton();
};
