
let keys = require('./keys.js');
let request = require('request');

let command = process.argv[2];
let title = process.argv[3];

var queryUrl = ``;

let checkCommand = function() {
  if (command === 'my-tweets') {
    myTweets();
  } else if (command === 'spotify this song') {
    spotifyThis(title);
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

let myTweets = function() {
  console.log("My Tweets:");
  let twitterUrl = ``
  request(twitterUrl, function(error, response, body) {
    
  })
}

let spotifyThis = function(song) {

}

let movieThis = function(movie) {

}

let doIt = function() {

}

checkCommand();