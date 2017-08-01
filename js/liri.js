
//let keys = require('./keys.js');
let request = require('request');

let command = process.argv[2];
let title = process.argv[3];

var queryUrl = ``;

let checkCommand = function() {
  if (command === 'my-tweets') {
    let twitter = require('./twitter.js');
  } else if (command === 'spotify-this-song') {
    let spotify = require('./spotify.js');;
  } else if (command === 'movie-this') {
    movieThis(title);
  } else if (command === 'do-what-it-says') {
    doIt();
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