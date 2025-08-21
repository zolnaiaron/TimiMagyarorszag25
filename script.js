document.addEventListener("DOMContentLoaded", () => {
  const images = ["images/hatter1.jpg", "images/hatter2.jpg", "images/hatter3.jpg", "images/hatter4.jpg"];
  let currentImage = 0;
  let xPos = 0;
  const background = document.querySelector(".background");

  background.style.backgroundImage = `url(${images[currentImage]})`;
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundSize = "cover";

  function animateBackground() {
    xPos -= 0.3;
    background.style.backgroundPosition = `${xPos}px 0`;

    if (Math.abs(xPos) >= window.innerWidth) {
      currentImage = (currentImage + 1) % images.length;
      background.style.backgroundImage = `url(${images[currentImage]})`;
      xPos = 0;
    }

    requestAnimationFrame(animateBackground);
  }

  animateBackground();
});
