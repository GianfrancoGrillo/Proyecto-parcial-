
let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString); 

let id = qsToObject.get('id');


let urlgeneroPelicula= `https://api.themoviedb.org/3/discover/movie?api_key=fcb65972de75954111563f90b05f9fed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
fetch(urlgeneroPelicula)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let peliculasGenero= document.querySelector(".peliculasGenero")
  let listageneros= ''
  for(let i=0; i<data.results.length; i++ ){
    listageneros += `<article> 
    <p>${data.results[i].title} </p>
    <img src= "https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt= '' />
     <a href= "./detailsSeries.html?id=${data.results[i].id}"> Ver mas</a>
     </article>`;
  }
  peliculasGenero.innerHTML= listageneros; 
})
.catch(function(error) {
  console.log("Error: " + error);
})

let urlgeneroSerie= `https://api.themoviedb.org/3/discover/tv?api_key=fcb65972de75954111563f90b05f9fed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`

fetch(urlgeneroSerie)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let seriesGenero= document.querySelector(".generoSeries")
  let listageneros= '';
  for(let i=0; i<data.results.length; i++ ){
    listageneros += `<article> 
    <p>${data.results[i].original_name} </p>
    <img src= "https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt= '' />
     <a href= "./detailsSeries.html?id=${data.results[i].id}"> Ver mas</a>
     </article>`;
  }
  seriesGenero.innerHTML= listageneros; 
})
.catch(function(error) {
  console.log("Error: " + error);
})


let urlGenero = 'https://api.themoviedb.org/3/genre/movie/list?api_key=fcb65972de75954111563f90b05f9fed'
fetch(urlGenero)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let titulo = document.querySelector(".titulo")
  titulo.innerText+= data.name;
})
.catch(function(error) {
  console.log("Error: " + error);
})