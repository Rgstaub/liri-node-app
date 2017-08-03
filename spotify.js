const Spotify = require('node-spotify-api');
const keys = require('./keys.js');
const inquirer = require('inquirer');
let title = '';

function spotify(song) {
  spotify.search({
    type: 'track',
    query: song
  })
  .then((response) => {
    console.log(response.tracks.items[0].artists[0].name);
    console.log(response.tracks.items[0].album.name);
    console.log(response.tracks.items[0].name)
    console.log(response.tracks.items[0].external_urls.spotify);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Concatenate all the arguments after the command into a title variable
// if none, Ace of Base!
if (process.argv[3]) {
  for (let i = 3; i < process.argv.length; i++) {
    title += ` ${process.argv[i]}`;
  }
} else {
  title = 'the sign ace of base';
}

// Set spotify object with keys
var spotify = new Spotify({
  id: keys.spotifyKeys.client_id,
  secret: keys.spotifyKeys.client_secret
});

function spotifySearch(song) {
  spotify.search({
    type: 'track',
    query: song
  })
  .then((response) => {
    console.log(`Artist: ${response.tracks.items[0].artists[0].name}`);
    console.log(`Album: ${response.tracks.items[0].album.name}`);
    console.log(`Song Title: ${response.tracks.items[0].name}`)
    console.log(`Listen: ${response.tracks.items[0].external_urls.spotify}`);
  })
  .catch((err) => {
    console.log(err);
  });
}

function spotifyInquire() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'song',
      message: 'Please enter a song title. Artist name may also be specified',
    }
  ])
  .then( (data) => {
    spotifySearch(data.song)
  })
}

if (!process.argv[2]) {
  spotifyInquire();
} else {
  spotifySearch(title);
};