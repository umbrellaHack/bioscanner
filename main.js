
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

window.onload = (event) => {
    //determine if user prefers dark mode by default
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
    
    if (prefersDarkMode) {
        toggleDarkMode()
    }
};
