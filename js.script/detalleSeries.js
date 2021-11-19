
let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString); 

//Crea una variable y atrae lo que le sigue al signo "?""

let id = qsToObject.get('id');
// Agarramos el "id" de la queryStringObject y la guardamos

let urll= `https://api.themoviedb.org/3/tv/${id}?api_key=fcb65972de75954111563f90b05f9fed`
let urllImg=`https://image.tmdb.org/t/p/w342/` 
var titulo=document.getElementById("titulo");
var rating=document.getElementById("rating");
var sinopsis=document.getElementById("sinopsis");
var estreno=document.getElementById("estreno");
var duracion=document.getElementById("duracion");
var genero=document.getElementById("genero");
var imagen=document.querySelector(".imagenSerie");

fetch(urll)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  
  imagen.src=urllImg+data.poster_path;
  titulo.innerHTML=data.original_name;
  rating.innerHTML=data.vote_average;
  sinopsis.innerHTML=data.overview;
  estreno.innerHTML=data.first_air_date;
  duracion.innerHTML=data.number_of_episodes;
  genero.innerHTML += `<a href="generos.html?id=${data.genres[0].id}">${data.genres[0].name}</a>`;

})
.catch(function(error) {
  console.log("Error: " + error);
})

let enlaceGeneros= document.querySelector('#enlaceGeneros')
enlaceGeneros.innerHTML=data.enlaceGeneros;