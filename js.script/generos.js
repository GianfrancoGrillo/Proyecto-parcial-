
// FETCH DE GENERO PELICULAS

let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c96a79dd3a41e33fa75fda92e7e71ee6'
fetch(url)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
       let info = data.genres;
        let genero = document.querySelector('#generoPelicula')
        let genPelicula = ""
       
        for (let i = 0; i < info.length; i++) {
            genPelicula +=
            `
            <a href="detalleGenero?id=${info[i].id}">
                <h3>${info[i].name}</h3>
             </a>
        `;
  
        
        }
        genero.innerHTML=genPelicula 

        console.log(data);
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })



// FETCH DE GENERO DE SERIES

let urll= 'https://api.themoviedb.org/3/genre/tv/list?api_key=c96a79dd3a41e33fa75fda92e7e71ee6'  

    fetch(urll)
    .then(function(response) {
      return response.json()
    })


    .then(function(data) {
        let info = data.genres;
        let genero = document.querySelector('#generoSeries')
        let genPelicula = ""
       
        for (let i = 0; i < info.length; i++) {
            genPelicula +=
            `
            <a href="detalleGenero?id=${info[i].id}">
                <h3>${info[i].name}</h3>
             </a>
        `;
  
        
        }
        genero.innerHTML=genPelicula 




      console.log(data);
    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
    