
const inquirer = require('inquirer');
const command = process.argv[2];

function inquire() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'command',
      message: 'What would you like to do?',
      choices: [
        'See my last ten Tweets',
        'Look up a song',
        'Look up a movie',
        'Access my saved action'
      ]
    }
  ]).then(function(data) {
      if (data.command === 'See my last ten Tweets') {
      let twitter = require('./twitter.js');
    } else if (data.command === 'Look up a song') {
      console.log(`
  ░░░░░░░░░░░░░░░░▄░█▀▀▀▀▀█▀█▀█▀▀▀█▀█▀▀▀█░▄░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░▄░█░█░█░█▀█░█░█░█▄░▀█░█░███░█░█░▄░░░░░░░░░░░░
  ░░░░░░░░▄░█░█░█░█░█▄█▄█▄█▄▄▄█▄▄▄█▄█▄▄▄█░█░█░█░█░▄░░░░░░░░
  | ▌▌| ▌▌▌| ▌▌| ▌▌▌| ▌▌| ▌▌▌| ▌▌| ▌▌▌| ▌▌| ▌▌▌| ▌▌| ▌▌| ▌
  |̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|̲ ̲|

  `)
      let spotify = require('./spotify.js');
    } else if (data.command === 'Look up a movie') {
      let movies = require('./movie.js');
    } else if (data.command === 'Access my saved action') {
      let doIt = require('./doIt.js');
    }
  })
}

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

if (process.argv[2]) {
  checkCommand();
} else {
  inquire();
}