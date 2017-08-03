var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
let title = '';
if (process.argv[3]) {
  for (let i = 3; i < process.argv.length; i++) {
    title += ` ${process.argv[i]}`;
  }
} else {
  title = 'the sign ace of base';
}

var spotify = new Spotify({
  id: keys.spotifyKeys.client_id,
  secret: keys.spotifyKeys.client_secret
});

spotify.search({
  type: 'track',
  query: title
})
.then(function(response) {
  console.log(response.tracks.items[0]);
  console.log(response.tracks.items[0].artists[0].name);
  console.log(response.tracks.items[0].album.name);
  console.log(response.tracks.items[0].name)
  console.log(response.tracks.items[0].external_urls.spotify);
})
.catch(function(err) {
  console.log(err);
});