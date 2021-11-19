let seriesFavoritas = [];
let recuperoSeries = localStorage.getItem


let peliculasFavoritas = [];
let recuperoPeliculas = localStorage.getItem















//ARMO EL FETCH
let url = `https://api.themoviedb.org/3/movie/76341$%7Bid%7D${id}?api_key=16a2dd0992d74c2f7f1bcdd6c168fd85`

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    
    })
    .catch(function(e){
        console.log(e);
    })