document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const nav = document.getElementById("main-nav");
  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
  hamburger.addEventListener("keypress", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      nav.classList.toggle("active");
      hamburger.classList.toggle("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("whatsapp-icon").classList.add("glow-zoom");
});

const text = "Developed by Zaya Technologies";
const color = "#25d366";
const el = document.getElementById("animated-zaya");
let i = 0;
function animate() {
  if (i < text.length) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.style.color = color;
    el.appendChild(span);
    i++;
    setTimeout(animate, 80);
  }
}
animate();

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const overlay = document.getElementById("loading-overlay");
    overlay.style.opacity = "0";
    setTimeout(() => (overlay.style.display = "none"), 600);
  }, 5000);
});

const loadingText = [
  "Empowering Ideas, Delivering Digital Excellence.",
  "Please wait while we prepare your experience...",
];
const loadingElement = document.getElementById("loading-animated-text");
let loadingLine = 0,
  loadingChar = 0;

function typeLoadingText() {
  if (loadingLine < loadingText.length) {
    if (loadingChar < loadingText[loadingLine].length) {
      loadingElement.innerHTML += loadingText[loadingLine].charAt(loadingChar);
      loadingChar++;
      setTimeout(typeLoadingText, 40);
    } else {
      if (loadingLine === 0) loadingElement.innerHTML += "<br>";
      loadingLine++;
      loadingChar = 0;
      setTimeout(typeLoadingText, 500);
    }
  }
}
typeLoadingText();
