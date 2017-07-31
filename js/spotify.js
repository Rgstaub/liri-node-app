var Spotify = require('node-spotify-api');
var keys = require('./keys.js');

var spotify = new Spotify({
  id: keys.spotifyKeys.client_id,
  secret: keys.spotifyKeys.client_secret
});

spotify.search({
  type: 'track',
  query: 'The Sign Ace of Base'
})
.then(function(response) {
  console.log(response.tracks.items[0]);
})
.catch(function(err) {
  console.log(err);
});