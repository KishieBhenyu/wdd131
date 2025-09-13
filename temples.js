const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("primaryNav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuBtn.textContent = nav.classList.contains("show") ? "X" : "☰";
});

// Set current year
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Set last modified date
const lastMod = document.getElementById("lastModified");
if (lastMod) {
  lastMod.textContent = `Last modified: ${document.lastModified}`;
}
