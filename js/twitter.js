let Twitter = require('twitter');
//let exports = module.exports = {};
let keys = require('./keys.js');


let error = function(err, response, body) {
  console.log('ERROR [%s]', err);
};

var twitter = new Twitter(keys.twitterKeys);
twitter.get('search/tweets', {q: "bobloblawatty"}, function(err, body, response) {
  if(err) {
    error(err, body, response);
    return;
  };
  console.log(`
                              ▀▄░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                            ░░▀▄▀▄░░░░░░░░░░░░░░░░░░▄▀▄▀▀▄░░▄▀░░
                            ░░▀▄▀▄▀▄░░░░░░░░░░░░░░▄▀▄▀▄▀▄▀▄▀░░▄▄
                            ░░░░▀▄▀▄▀▄░░░░░░░░░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░
                            ░░░░▀▄▀▄▀▄▀▄▀▄░░░░░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░
                            ░░▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░
                            ░░░░▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░
                            ░░░░░░▀▄▀▄▀▄▀▄▀▄▀▄▀▄▄▀▄▀▄▀▄▀▄▀▄▀░░░░
                            ░░░░▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▄▀▄▀▄▀▄▀▄▀▄▀░░░░
                            ░░░░░░▀▄▀▄▀▄▀▄▀▄▀▄▄▀▄▀▄▀▄▀▄▀▄▀░░░░░░
                            ░░░░▒▒▒▒▀▄▀▄▀▄▀▄▀▄▄▀▄▀▄▀▄▀▄▀▄▀▒▒░░░░
                            ▒▒▒▒▒▒▒▒▒▒▀▄▀▄▀▄▄▀▄▀▄▀▄▀▄▀▄▀▒▒▒▒▒▒▒▒
                            ▒▒▒▒▒▒▒▒▒▒▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▒▒▒▒▒▒▒▒▒▒
                            ▒▒▒▒▒▒▒▒▄▀▄▀▄▀▄▀▄▀▄▀▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒
                            ▒▒▒▒▒▒▄▀▄▀▄▀▄▀▄▀▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
                            ▒▒▄▀▄▀▄▀▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
                              ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
    ====================================================================================
                                          MY TWEETS
    ====================================================================================
  `)
  for (let i = 0; i < body.statuses.length; i++) {
    let tweetDate = body.statuses[i].created_at;
    tweetDate = tweetDate.substring(0, 10);
    let tweetText = body.statuses[i].text;
    let retweetedFrom = "";
    if (body.statuses[i].retweeted_status) {
      retweetedFrom = body.statuses[i].retweeted_status.user.name;
    } else {
      retweetedFrom = "@bobloblawatty"
    }
    console.log(`
    ------------------------------------------------------------------------------------
                                          ${tweetDate}

    "${tweetText}"

    - ${retweetedFrom}
    ___________________________________________________________________________________`)
  }
} )

module.exports.twitter;