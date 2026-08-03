const elementos = document.querySelectorAll(".animar");

const mostrarElementos = () => {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {

            elemento.classList.add("visible");

        }

    });

};

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if(botonMenu){

    botonMenu.addEventListener("click",()=>{

        menu.classList.toggle("activo");

    });

}

/*==========================================
LIGHTBOX
==========================================*/

const lightbox = document.getElementById("lightbox");
const imagenLightbox = document.getElementById("imagen-lightbox");

if(lightbox){

    document.querySelectorAll(".obra-card img").forEach(imagen=>{

        imagen.style.cursor="pointer";

        imagen.addEventListener("click",()=>{

            imagenLightbox.src=imagen.src;

            lightbox.classList.add("activo");

        });

    });

    lightbox.addEventListener("click",()=>{

        lightbox.classList.remove("activo");

    });

}