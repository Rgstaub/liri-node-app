
const request = require('request');
const command = process.argv[2];

var queryUrl = ``;

let checkCommand = function() {
  if (command === 'my-tweets') {
    let twitter = require('./twitter.js');
  } else if (command === 'spotify-this-song') {
    let spotify = require('./spotify.js');
  } else if (command === 'movie-this') {
    let movies = require('./movie.js');
  } else if (command === 'do-what-it-says') {
    let diIt = require('./doIt.js');
  } else {
    console.log(`
  **********************************************
                Invalid Command
  **********************************************  
  Liri can accept one of the following commands:

    my-tweets  
    spotify-this-song <song title>
    movie-this <movie title>
    do-what-it-says`)
  }
}

checkCommand();