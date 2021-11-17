
let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString); 

let id = qsToObject.get('id');

let urll= `https://api.themoviedb.org/3/tv/popular/?api_key=fcb65972de75954111563f90b05f9fed`

fetch(urll)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log("Error: " + error);
})

