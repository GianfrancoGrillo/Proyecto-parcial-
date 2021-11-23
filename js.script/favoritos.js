const imagenes = `https://image.tmdb.org/t/p/w342`

console.log('favoritos');

console.log(localStorage);
//Recuperar los ids del storage.
let recuperoStorageSeries = localStorage.getItem('SeriesFavoritos');
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);
let series= JSON.parse(recuperoStorageSeries);
//Capturar el elemendo del DOM donde los quiero mostrar.
let lista = document.querySelector('.lista');
let contenidoLista = '';

if(favoritos == null || favoritos.length == 0 && series == null || series.length == 0){
    lista.innerHTML = '<h2>No hay favoritos seleccionados</h2>';
}

//Recorrer el array y:
for(let i=0; i<favoritos.length; i++){
    
//llamar a la api para obtener datos de cada id
let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=16a2dd0992d74c2f7f1bcdd6c168fd85`

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        contenidoLista += ` <article>
        <a href="detalle-pelicula.html?id=${data.id}">
                                    <h2>Titulo: ${data.title}</h2>
                                    <img src="${imagenes + data.poster_path}" alt="">
                                    </a>
                                </article>`
            lista.innerHTML = contenidoLista;
    
    })
    .catch(function(e){
        console.log(e);
    })

}


for(let i=0; i<series.length; i++) {

    let urll = `https://api.themoviedb.org/3/tv/${series[i]}?api_key=16a2dd0992d74c2f7f1bcdd6c168fd85` 

fetch(urll)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        contenidoLista += ` <article>
        <a href="detalle-series.html?id=${data.id}">
        <h2> Titulo: ${data.name}</h2>
        <img src="${imagenes + data.poster_path}" alt="">
        </a>
                                </article>`
            lista.innerHTML = contenidoLista;
    
    })
    .catch(function(e){
        console.log(e);
    }) 
}