// Placeholder JS for future interaction
console.log("Website loaded successfully");
function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgElement.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
let slideIndex = 0;
showAboutSlides();

function showAboutSlides() {
  const slides = document.querySelectorAll(".about-slide");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showAboutSlides, 3000); // change every 3s
}
