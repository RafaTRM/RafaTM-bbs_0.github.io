const industria = document.querySelector(".ind-items");
let maxScrollLeft = industria.scrollWidth - industria.clientWidth;
let intervalo = 3000;
let step = 1;
const start = () => {
    intervalo = setInterval(function () {
        industria.scrollLeft = industria.scrollLeft + step;
        if (industria.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if (industria.scrollLeft === 0) {
            step = step * -1;
        }
    },18);
};
const stop = () => {
    clearInterval(intervalo);
};

industria.addEventListener('mouseover', () => {
    stop();
})

industria.addEventListener('mouseout', () => {
    start();
});


start();







/*let slider = document.querySelector(".xperience .slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;
/*let intervaloE = 190000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    start();
},intervalo)

function start() {
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;
    if (contador == sliderIndividual.length) {
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.trasition = "transform 1s";
            contador = 1;
        },9000)
    }
};

/*
const stop = () => {
    /*clearInterval(intervalo);
    setTimeout("900000");
};

sliderIndividual.addEventListener('mouseover', () => {
    stop();
})




slider.addEventListener('mouseout', () => {
    start();
});

/*
start();
*/