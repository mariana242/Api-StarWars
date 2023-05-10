import { traerPeliculas, traerPersonajes } from "./serviciostarwars.js";

const fila = document.querySelector(".fila-personajes");
const fila2 = document.querySelector(".fila-peliculas");

traerPersonajes().then(function (respuesta) {
    respuesta.results.forEach(function (personaje) {
        let columna = document.createElement("div");
        columna.classList.add("col");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "shadow", "align-center");

        let nombre = document.createElement("h4");
        nombre.classList.add("text-center", "fw-bold");
        nombre.textContent = personaje.name;

        let altura = document.createElement("h4");
        altura.classList.add("text-center", "fw-bold");
        altura.textContent = personaje.height;

        let peliculas = document.createElement("h4");
        peliculas.classList.add("text-center", "fw-bold");
        peliculas.textContent = personaje.films.length;

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(altura);
        tarjeta.appendChild(peliculas); 
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    });
});

traerPeliculas().then(function (respuesta) {
    respuesta.results.forEach(function (pelicula) {
        let columna = document.createElement("div");
        columna.classList.add("col");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "shadow", "align-center");

        let nombre = document.createElement("h4");
        nombre.classList.add("text-center", "fw-bold");
        nombre.textContent = pelicula.title;

        tarjeta.appendChild(nombre);
        columna.appendChild(tarjeta);
        fila2.appendChild(columna);
    });
});
