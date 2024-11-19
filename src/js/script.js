// *** CAROUSEL ***
// TODO

const carousel = document.querySelector("div>div");
const prevButton = document.querySelector("button");
const nextButton = document.querySelector("button+button");
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;

if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click",(evt) => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" }); ;
    });
  
    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", (evt) => {
        carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });;
    }); 
  }