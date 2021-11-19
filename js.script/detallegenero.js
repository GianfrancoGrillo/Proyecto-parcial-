let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString); 

let id = qsToObject.get('id');

let urlgeneroPelicula= `https://api.themoviedb.org/3/discover/movie?api_key=fcb65972de75954111563f90b05f9fed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`

let urlgeneroSerie= `https://api.themoviedb.org/3/discover/tv?api_key=fcb65972de75954111563f90b05f9fed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`

let urlGenero = 'https://api.themoviedb.org/3/genre/movie/list?api_key=fcb65972de75954111563f90b05f9fed'

