document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const nav = document.getElementById("main-nav");

  function closeMenu() {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    document.removeEventListener("click", outsideClickListener);
  }

  function outsideClickListener(e) {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  }

  hamburger.addEventListener("click", function (e) {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
    if (nav.classList.contains("active")) {
      setTimeout(() => {
        document.addEventListener("click", outsideClickListener);
      }, 0);
    } else {
      document.removeEventListener("click", outsideClickListener);
    }
    e.stopPropagation();
  });

  hamburger.addEventListener("keypress", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      nav.classList.toggle("active");
      hamburger.classList.toggle("active");
      if (nav.classList.contains("active")) {
        setTimeout(() => {
          document.addEventListener("click", outsideClickListener);
        }, 0);
      } else {
        document.removeEventListener("click", outsideClickListener);
      }
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

setTimeout(function () {
  var popup = document.getElementById("hireme-popup");
  if (popup) popup.style.display = "flex";
}, 10000);

document.addEventListener("DOMContentLoaded", function () {
  var closeBtn = document.getElementById("close-hireme-popup");
  var popup = document.getElementById("hireme-popup");
  if (closeBtn && popup) {
    closeBtn.onclick = function () {
      popup.style.display = "none";
    };
    // Optional: close popup when clicking outside modal
    popup.onclick = function (e) {
      if (e.target === popup) popup.style.display = "none";
    };
  }
});
