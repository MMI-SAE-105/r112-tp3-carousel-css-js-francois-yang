// *** CAROUSEL ***
// TODO

const carousel = document.querySelector("div>div");
const prevButton = document.querySelector("button");
const nextButton = document.querySelector("button+button");


if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click",(evt) => {
        carousel.scrollBy({ left: -260, behavior: "smooth" }); ;
    });
  
    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", (evt) => {
        carousel.scrollBy({ left: +260, behavior: "smooth" });;
    }); 
  }