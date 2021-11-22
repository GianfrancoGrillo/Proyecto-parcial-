window.addEventListener('load', function(){
    let spinner = document.querySelector('.spinner')
    spinner.style.display = "none";
    
    //Capturamos el formulario
    let formulario = document.querySelector('form');
    let buscador = document.querySelector('[name="search"]'); //capturamos el campo que queremos chequear
    
    //creamos la variable del campo
    let aviso = document.querySelector('.aviso')
    
    //creamos un evento con evenListener
    formulario.addEventListener('submit', function(e){
        e.preventDefault();//prevenimos el comportamiento default
    
        //condicionales chequeamos el contenido
        if( buscador.value == ""){
            //le aviso al usuario con alert
            aviso.innerText = 'El buscador no puede estar vacío';
        } else if( buscador.value.length < 3){
            //otro alert que avise que necesita mas caracteres
            aviso.innerText = 'Por favor ingrese más de tres caracteres';
        } else {
            this.submit();//enviamos el formulario
        }
    
    })
    
    //limpiamos el mensaje de error cuando el usuario modifica el contenido
    buscador.addEventListener('input', function(){
        aviso.innerText= '';
    
    })
    
        

    // resultados de busqueda
    
        let queryString = location.search //Caputramos queryString
        let queryStringToObject = new URLSearchParams(queryString); //La transformamos en Objeto Literal
        //como es un objeto literal usamos el metodo get para obtener los datos
        let aBuscar  = queryStringToObject.get('search'); //obtener la informacion que esta dentro de nuestro form
        //ponemos el name del campo input del formulario porque sino no funciona. 

        let infobuscada = document.querySelector('.resultado1')
        infobuscada.innerText = `"Resultados de busqueda para: ${aBuscar}"`;
        //limpiamos el mensaje cuando el usuario modifica el contenido
            buscador.addEventListener('input', function(){
                infobuscada.innerText= '';
    
                })

    
    //creamos variables con urls
    let proxy2 = 'https://developers.themoviedb.org/3/search/search-movies'
    let topMovies = `https://api.themoviedb.org/3/search/movie?q=${aBuscar}`//luego de ?q= ponemos la variable que armamos que contiene los datos dentro de nuesro buscador.
    let url2 = proxy2+topMovies
    
    //buscamos info de la api
    fetch(url2)
        .then(function(response){
            return response.json()//convertimos la info en formato json
    
        })
        .then(function(data){
            let info = data.data
    
    
            //creamos la variable del campo
            let movies = document.querySelector('.resultado2')
            let nada = '';
    
            //condicionales chequeamos el contenido
            if(info.length == 0){
                nada+= ``;
            }
            movies.innerHTML += nada

                    //limpiamos el mensaje de error cuando el usuario modifica el contenido
            buscador.addEventListener('input', function(){
                movies.innerText= '';

            })
    
            console.log(info);
            let movieContainer = document.querySelector('.resultadosMovies');
            let contenido = '';
    
            //recorremos la info
            for(let i=0; i<info.length; i++){
                contenido += `<li class="cajaextra"> 
                                            <a href="./detalle-peliculas.html"?id=${info[i].id}"class="names5">${info[i].title}</a> 
                                            <a href="./detalle-series.html?id=${info[i].artist.id}"class="cosa5">${info[i].artist.name}</a>
                                            
                                    </li>`
            }
            //editamos nuestro html
            movieContainer.innerHTML += contenido
        })
        
    // ARTSITAS
    //creamos variables con urls
    let proxy3 = 'https://developers.themoviedb.org/3/search/search-tv-shows'
    let topSeries = `https://api.themoviedb.org/3/search/tv?q=${aBuscar}`//luego de ?q= ponemos la variable que armamos que contiene los datos dentro de nuesro buscador.
    let url3 = proxy3+topSeries
    
    //buscamos info de la api
    fetch(url3)
    .then(function(response){
        return response.json()//convertimos la info en formato json
    
    })
    .then(function(data){
        let info = data.data
    
            //creamos la variable del campo
            let series = document.querySelector('.resultado2')
            let nada = '';
    
            //condicionales chequeamos el contenido
            if(info.length == 0){
                nada+= `<h2 class= "tito"> No se encontaron resultados para ${aBuscar}</h2>
                                <h2 class="tito">Búsqueda relacionada:</h2>`;

                                let proxy = ''
                                let topMovies = ''
                                let url = proxy+topMovies
                                
                                //buscamos info de la api
                                fetch(url)
                                    .then(function(response){
                                        return response.json()//convertimos la info en formato json
                                
                                    })
                                    .then(function(data){
                                        let info = data.data
                                        console.log(info);
                                        let movieContainer = document.querySelector('.detailx');
                                        let contenidoMovie = '';
                                
                                        //recorremos la info
                                        for(let i=0; i<info.length; i++){
                                            contenidoMovie += `<li class="caja"> 
                                                                        <a href="./detail-track.html?id=${info[i].id }"><img class="fotos" src="${info[i].album.cover_medium}"
                                                                        alt=""></a> <a href="./detail-track.html"class="names">${info[i].title}</a> <a href=".playlists.html"></a><a href="./detail-artist.html?id=${info[i].artist.id}"class="names">${info[i].artist.name}</a>
                                                                </li>`
                                        }
                                        //editamos nuestro html
                                        movieContainer.innerHTML += contenidoMovie
                                    }).catch(function(error){
                                        console.log(error);
                                    })
                                
            }
            series.innerHTML += nada

                    //limpiamos el mensaje de error cuando el usuario modifica el contenido
            buscador.addEventListener('input', function(){
                series.innerText= '';
    
            })
    
        console.log(info);
        let seriesContainer= document.querySelector('.resultadosSeries');
        let contenidoSeries= '';
    
        //recorremos el array de datos
        for(let i=0; i<info.length; i++){
    
            contenidoSeries += `<li class="cajaextra">
                                    <a href="./detail-artist.html?id=${info[i].id}"><img class="fotos5" src="${info[i].picture_medium}" alt=""></a>
                                    <a href="./detail-artist.html?id=${info[i].id}" class="cosa5">${info[i].name}</a>
                                    </li>`


                                
        }
        //editamos el html
        seriesContainer.innerHTML += contenidoSeries
    })   
    

    // ALBUMS
    //creamos variables con urls
    let proxy4 = 'https://developers.themoviedb.org/3/search/multi-search'
    let toptopMovies = `https://api.themoviedb.org/3/search/multi?q=${aBuscar}`//luego de ?q= ponemos la variable que armamos que contiene los datos dentro de nuesro buscador.
    let url4 = proxy4+toptopMovies
    
    //buscamos info de la api
    fetch(url4)
    .then(function(response){
        return response.json()//convertimos la info en formato json
    
    })
    .then(function(data){
        let info = data.data

    
            //creamos la variable del campo
            let tMovies = document.querySelector('.resultado2')
            let nada = '';
    
            //condicionales chequeamos el contenido
            if(info.length == 0){
                nada+= ``;
            }
            tMovies.innerHTML += nada

                    //limpiamos el mensaje de error cuando el usuario modifica el contenido
            buscador.addEventListener('input', function(){
                tMovies.innerText= '';
    
            })
    
        console.log(info);
        let tMoviesContainer = document.querySelector('.resultadosTopMovies');
        let contenidotMovies = '';
    
        //recorremos el array de datos
        for(let i=0; i<info.length; i++){
    
            contenidotMovies += `<li class="cajaextra">
                                    <a href="./detail-album.html?id=${info[i].id}"><img class="fotos5" src="${info[i].cover_medium}"></a>                 
                                    <a href="./detail-album.html?id=${info[i].id}" class="names5">${info[i].title}</a>
                                    <a href="./detail-artist.html?id=${info[i].artist.id}"class="cosa5">by ${info[i].artist.name}</a>
                                </li>`
        }
        //editamos el html
        tMoviesContainer.innerHTML += contenidotMovies
    }) 

    
    //capturamos el elemento y lo metemos dentro de una variable
    let busquedaper = document.querySelector(".resultado1")
    
    //hacemos un evento en la variable ya asignada
    busquedaper.addEventListener('mouseover', function(e){
        e.preventDefault()
        //lo que sucede cuando pasa el mouse
        busquedaper.style.border= "solid 3px chartreuse"; 
    })
    busquedaper.addEventListener('mouseout', function(){
        //lo que sucede cuando retira el mouse
        busquedaper.style.border = "";
    })

    //OTRO EVENT 

    //capturamos el elemento y lo metemos dentro de una variable
    let elementolista = document.querySelector(".cajaextra")
    
    //hacemos un evento en la variable ya asignada
    elementolista.addEventListener('mouseover', function(e){
        e.preventDefault()
        //lo que sucede cuando pasa el mouse
        elementolista.style.backgroundColor = "grey"; 
    })
    elementolista.addEventListener('mouseout', function(){
        //lo que sucede cuando retira el mouse
        elementolista.style.backgroungColor = "black";
    })
})