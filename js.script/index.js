
const imagenes = `https://image.tmdb.org/t/p/w342`


// 1 FETCH DE PELICULAS MAS POPULARES
let url = `https://api.themoviedb.org/3/movie/popular?api_key=c96a79dd3a41e33fa75fda92e7e71ee6`

fetch(url)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        let array = data.results;
        let pelisPopulares = document.querySelector('#peliculasPopulares')
        let infoPelis = '';
        for (let i = 0; i < 5; i++) {
            infoPelis +=
                `
           <a href="detalle-pelicula.html?id=${array[i].id}">
           <article>
               <h3>${array[i].title}</h3>
               <img src="${imagenes + array[i].poster_path}" alt="${array[i].title}">
               </article>
            </a>
       `;

            pelisPopulares.innerHTML = infoPelis

        }

        console.log(data);
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })

//CIERRE DE FETCH DE PELICULAS MAS POPULARES




// 2 FETCH DE SERIES MAS POPULARES

let urll = ' https://api.themoviedb.org/3/tv/popular?api_key=c96a79dd3a41e33fa75fda92e7e71ee6'

fetch(urll)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let array = data.results;
        let series = document.querySelector('#seriesPopu')
        let infoSeries = ''
        for (let i = 0; i < 5; i++) {
            infoSeries +=
                `
           <a href="detalle-series.html?id=${array[i].id}">
           <article>
               <h3>${array[i].name}</h3>
               <img src="${imagenes + array[i].poster_path}" alt="${array[i].name}">
               </article>
            </a>
       `;


        }
        series.innerHTML = infoSeries;

        console.log(data);
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })
// CIERRE DE FETCH DE SERIES MAS POPULARES







// 3 FETCH DE LO MAS VISTO EN PELICULAS 
let urlll = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c96a79dd3a41e33fa75fda92e7e71ee6'

fetch(urlll)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        let array = data.results;
        let pelisValoradas = document.querySelector('#peliculasValoradas')
        let infoValoradas = ""
        for (let i = 0; i < 5; i++) {
            infoValoradas +=
                `
   <a href="detalle-pelicula.html?id=${array[i].id}">
   <article>
       <h3>${array[i].title}</h3>
       <img src="${imagenes + array[i].poster_path}" alt="${array[i].title}">
       </article>
    </a>
`;

        }
        pelisValoradas.innerHTML = infoValoradas;


        console.log(data);
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })
// CIERRE DE FETCH DE LO MAS VISTO EN PELICULAS