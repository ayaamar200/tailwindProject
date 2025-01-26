const toggleBtn = document.getElementById("toggle");
const toggleLabel = document.getElementById("toggleLabel");

document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

if(localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)){
  toggleBtn.checked = true;
  toggleLabel.textContent = "Light Mode";

}else{
  toggleLabel.textContent = "Dark Mode";
}




toggleBtn.addEventListener("change", () => {
  if (toggleBtn.checked) {
    localStorage.theme = "dark";
    toggleLabel.textContent = "Light Mode";
  } else {
    localStorage.theme = "light";
    toggleLabel.textContent = "Dark Mode";
  }

  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

});
