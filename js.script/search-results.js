const imagenes = `https://image.tmdb.org/t/p/w342`

let formulario = document.querySelector('form');
let inputField = document.querySelector('.buscar');
let message = document.querySelector('.message');
console.log(formulario)

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    if(inputField.value == ""){
        message.innerText = "El campo es obligatorio"    
    } else if(inputField.value.length < 3){
        message.innerText = "Ingresar al menos 3 caracteres"
    } else {
        formulario.submit()
    }

})

inputField.addEventListener('focus', function(evento){
  evento.preventDefault(); 
  console.log(evento)
    message.innerText = "";
    this.value = "";
})



let queryString = window.location.search; 
let queryObject = new URLSearchParams (queryString); 
console.log (queryObject);

let search = queryObject.get('buscar'); 
console.log (search)

let url = `https://api.themoviedb.org/3/search/multi?api_key=16a2dd0992d74c2f7f1bcdd6c168fd85&language=en-US&query=${search}&page=1&include_adult=false` 

let containerResults = document.querySelector ('.busquedaConteiner'); 
let searchTitle = document.querySelector ('.titleSearch')
let results = ''


      
  fetch (url)
  .then (datos=>datos.json() )
  .then (respuesta => {
  
      console.log (respuesta);
      let containerResults = ''
      
      respuesta.results.forEach ((data) => {
        // Series //
        if (data.media_type == "tv"){
          results += 
          `<article>
          <a href="detalle-series.html?id=${data.id}">${data.name}</a> 
          <img src="${imagenes + data.poster_path}" alt="">
          </article>
         ` 
        
         containerResults.innerHTML = results;
        }
  
        // Películas //
        else if (data.media_type == "movie"){
          results +=
          `<article>
          <a href="detalle-pelicula.html?id=${data.id}">${data.title}</a> 
          <img src="${imagenes + data.poster_path}" alt="">
          </article>
          ` 
  
              containerResults.innerHTML = results;
            }
        })
    })
