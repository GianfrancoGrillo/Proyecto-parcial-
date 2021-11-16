
// FETCH DE GENERO PELICULAS

let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c96a79dd3a41e33fa75fda92e7e71ee6'
fetch(url)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        let array = data.results;
        let genero = document.querySelector('#generoPelicula')
        let genPelicula = ""
        for (let i = 0; i < 20; i++) {
            genPelicula +=
            `
            <a href="detalleGenero?id=${array[i].id}">
                <h3>${array[i].name}</h3>
             </a>
        `;

                genero.innerHTML=genPelicula

        }



        console.log(data);
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

