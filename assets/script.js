/*
Quando l'utente preme uno dei bottoni, la classe active passa da un'immagine all'altra 
*/

// seleziono le immagini nell'html
const listHighlighted = document.querySelectorAll(".highlighted img");

const btnPrev = document.querySelector(".btn-up");
const btnNext = document.querySelector(".btn-down");

// debugger
// definisco la variabile che rappresenta lo stato attuale del carosello
// cioè l'indice dell'immagine attiva
let activeIndex = 0

btnNext.addEventListener("click",
    function() {
        listHighlighted[activeIndex].classList.remove("active");
        activeIndex++;
        if (activeIndex >= listHighlighted.length) {
            activeIndex = 0;
        }
    listHighlighted[activeIndex].classList.add("active");
});

btnPrev.addEventListener("click",
    function() {
    listHighlighted[activeIndex].classList.remove("active");
    activeIndex--;
    if (activeIndex < 0) {
        activeIndex = listHighlighted.length -1;
    }
    listHighlighted[activeIndex].classList.add("active");
});


