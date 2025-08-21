const images = ["hatter1.jpg", "hatter2.jpg", "hatter3.jpg"];
let currentImage = 0;

const background = document.querySelector(".background");
let xPos = 0;

function animateBackground() {
  xPos -= 0.2; // mozgás jobbról balra

  // beállítjuk a background pozíciót
  background.style.backgroundPosition = `${xPos}px 0`;

  // ha elértük a teljes szélességet (kb. a képernyő szélessége)
  if (Math.abs(xPos) >= window.innerWidth) {
    currentImage = (currentImage + 1) % images.length;
    background.style.backgroundImage = `url(${images[currentImage]})`;
    xPos = 0;
  }

  requestAnimationFrame(animateBackground);
}

// Indítás
background.style.backgroundImage = `url(${images[currentImage]})`;
background.style.backgroundRepeat = "no-repeat";
background.style.backgroundSize = "cover";
animateBackground();

