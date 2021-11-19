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
let url = `https://api.themoviedb.org/3/movie/76341$%7Bid%7D${favoritos[i]}?api_key=16a2dd0992d74c2f7f1bcdd6c168fd85`
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