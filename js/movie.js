var request = require('request');

let title = "minions";

request(`http://www.omdbapi.com/?apikey=40e9cece&s=${title}`, function(err, response, body) {
    let movie = JSON.parse(body, null, 2);
    console.log(movie.Search[0]);
    

})
 
