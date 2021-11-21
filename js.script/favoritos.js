console.log('favoritos');

//Recuperar los ids del storage.
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);

//Capturar el elemendo del DOM donde los quiero mostrar.
let lista = document.querySelector('.lista');
let contenidoLista = '';

if(favoritos == null || favoritos.length == 0){
    lista.innerHTML = '<h2>No hay favoritos seleccionados</h2>';
}

//Recorrer el array y:
for(let i=0; i<favoritos.length; i++){
    
//llamar a la api para obtener datos de cada id
let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=fcb65972de75954111563f90b05f9fed`
}

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        contenidoLista += ` <article>
                                    <h2>${data.data.title}</h2>
                                    <img src=${data.data.images.original.url}>
                                    <a href="detalle-peliculas.html?id=${data.data.id}"> Ver película</a>
                                </article>`
            lista.innerHTML = contenidoLista;
    
    })
    .catch(function(e){
        console.log(e);
    })


    let urll= `https://api.themoviedb.org/3/tv/${id}?api_key=fcb65972de75954111563f90b05f9fed`

fetch(urll)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        contenidoLista += ` <article>
                                    <h2>${data.data.title}</h2>
                                    <img src=${data.data.images.original.url}>
                                    <a href="detalle-series.html?id=${data.data.id}"> Ver película</a>
                                </article>`
            lista.innerHTML = contenidoLista;
    
    })
    .catch(function(e){
        console.log(e);
    })