let Twitter = require('twitter');

console.log("My Tweets:");

let error = function(err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};    

var twitter = new Twitter(keys.twitterKeys);
twitter.get('search/tweets', {q: "bobloblawatty"}, function(err, tweets, response) {
  if(err) {
    error(err, tweets, response);
  };
  // for (let i = 0; i < tweets.statuses.length; i++) {
  //   console.log((tweets.statuses[i].text));
  // }
  
} )