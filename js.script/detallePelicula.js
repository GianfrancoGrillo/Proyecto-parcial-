
let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString); 

let id = qsToObject.get('id');


let urlImg=`https://image.tmdb.org/t/p/w342/`;
var titulo=document.getElementById("titulo");
var imagen=document.querySelector('.poster');
var rating=document.getElementById("rating");
var sinopsis=document.getElementById("sinopsis");
var estreno=document.getElementById("estreno");
var duracion=document.getElementById("duracion");
var genero=document.getElementById("genero");


let url= `https://api.themoviedb.org/3/movie/${id}?api_key=fcb65972de75954111563f90b05f9fed`
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

  //Array para guardar ids de gifs favoritos
  let favoritos = []

  //Si hay datos anteriores entonces debemos actualizar el array.
  let recuperoStorage = localStorage.getItem('favoritos'); //Esto retorna un json.

  if (recuperoStorage != null){
      favoritos = JSON.parse(recuperoStorage);
  }   

  //Cuando el usuario haga click en el link
  let linkFav = document.querySelector('.fav');

  //Si el id está en el array de favoritos
  if(favoritos.includes(id)){
      linkFav.innerText = 'Quitar de favoritos'       
  }


  linkFav.addEventListener('click', function(event){
      event.preventDefault();

      //Pregunto si el id está en el array
      if(favoritos.includes(id)){
          //Quiero sacar el id del array. Necesito saber la posición.
          let idASacar = favoritos.indexOf(id);
          //Sacar el id del array
          favoritos.splice(idASacar, 1);
          linkFav.innerText = "Agregar a Favoritos";

      } else {
          //pushear un id al array.
          favoritos.push(id);
          linkFav.innerText = 'Quitar de favoritos'
      }
      
      //Guardar el array en localStorage
      let favoritosAString = JSON.stringify(favoritos);
      localStorage.setItem('favoritos', favoritosAString);

      //Cehquear que tenemos datos en localstorage
      console.log(localStorage);
    })
})
.catch(function(error) {
  console.log("Error: " + error);
})
