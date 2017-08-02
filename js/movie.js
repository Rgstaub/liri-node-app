var request = require('request');

let title = "minions";

request(`http://www.omdbapi.com/?apikey=40e9cece&s=${title}`, function(err, response, body) {
    
    console.log(body);
    let movie = JSON.parse(body, null, 2);
    console.log(movie);
    let movieTitle = movie.Search[0].Title;
    let movieYear = movie.Search[0].Year;

})
 
