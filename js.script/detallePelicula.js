
let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString); 

let id = qsToObject.get('id');

let url= `https://api.themoviedb.org/3/movie/${id}?api_key=fcb65972de75954111563f90b05f9fed`
let urlImg=`https://image.tmdb.org/t/p/w342/`;
var titulo=document.getElementById("titulo");
var imagen=document.querySelector('.poster');
var rating=document.getElementById("rating");
var sinopsis=document.getElementById("sinopsis");
var estreno=document.getElementById("estreno");
var duracion=document.getElementById("duracion");
var genero=document.getElementById("genero");



fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
 
  titulo.innerHTML=data.original_title;
  imagen.src=urlImg+data.poster_path;
  rating.innerHTML=data.vote_average;
  sinopsis.innerHTML=data.overview;
  estreno.innerHTML=data.release_date;
  duracion.innerHTML=data.runtime;
  genero.innerHTML += `<a href="generos.html?id=${data.genres[0].id}">${data.genres[0].name}</a>`; 
  
})
.catch(function(error) {
  console.log("Error: " + error);
})

