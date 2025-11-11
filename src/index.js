/* Image Carousel 02 - index.js */
import "./style.css";

let slideIndex = 1;
let timeInterval = 2000;
let interval = setInterval(runShow, timeInterval);
// showSlides(slideIndex);

let btns = document.getElementsByClassName("button");
Array.from(btns).forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Button clicked: " + event.target.id);
    if (event.target.id == "prevBtn") {
      showSlides((slideIndex -= 1));
    }
    if (event.target.id == "nextBtn") {
      showSlides((slideIndex += 1));
    }
  });
});

let dotGrp = document.getElementsByClassName("dot");
Array.from(dotGrp).forEach((elem) => {
  elem.addEventListener("click", () => {
    let tmpStr = event.target.id.replace("dot", "");
    showSlides((slideIndex = tmpStr));
  });
});

