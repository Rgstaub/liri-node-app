let Twitter = require('twitter');
//let exports = module.exports = {};
let keys = require('./keys.js');

console.log("My Tweets:");

let error = function(err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};    

var twitter = new Twitter(keys.twitterKeys);
twitter.get('search/tweets', {q: "bobloblawatty"}, function(err, body, response) {
  if(err) {
    error(err, body, response);
    return;
  };
  // for (let i = 0; i < tweets.statuses.length; i++) {
  //   console.log((tweets.statuses[i].text));
  // }
  
  console.log(body.statuses[0]);
  let tweetDate = body.statuses[0].created_at;
  tweetDate = tweetDate.substring(0, 10);
  let tweetText = body.statuses[0].text;
  let retweetedFrom = body.statuses[0].retweeted_status.user.name
  console.log(tweetDate);
  console.log(tweetText);
  console.log(retweetedFrom)

} )

module.exports.tweets;