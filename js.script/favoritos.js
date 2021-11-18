//OBTENGO EL ID DE LA QS
let qs = location.search;
let qsToObject =new URLSearchParams(qs);
let id = qsToObject.get('id')

console.log(id);

//ARMO EL FETCH
let = url `http://127.0.0.1:5500/index.html/${id}?api_key=16a2dd0992d74c2f7f1bcdd6c168fd85`
fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let img = document.querySelector('img')
        img.src = data.data.images.original.url
        
        // array para guardar id de favoritos
        let favoritos = []
        // cuando el usuario toque el link
        let linkFav = document.querySelector("a");

        linkFav.addEventListener("click", function(event){
            event.preventDefault();

            // pushear un id al array
            let favoritosAGuardar = favoritos.push(id)

            // guardarlo el array local storage
            let favoritosAString = JSON.stringify(favoritosAGuardar)
            localStorage.setItem('favoritos', favoritosAString)
        })  
    })
    .catch(function(e){
        console.log(e);
    })