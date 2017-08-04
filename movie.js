var request = require('request');

let title = "";
for (let i = 3; i < process.argv.length; i++ ) {
    title += ` ${process.argv[i]}`;
}
console.log(`Title: ${title}`);

function getMovies(movie) {
    request(`http://www.omdbapi.com/?apikey=40e9cece&t=${movie}&type=movie`, function(err, response, body) {
        if (err) {
            return console.log(err);
        }
        let movie = JSON.parse(body, null, 2);
        console.log(movie)
        let movieTitle = movie.Title;
        let movieYear = movie.Year;
        let imdbScore = "";
            if (movie.imdbRating === "N/A") {
            imdbScore = "not rated";
        } else {
            imdbScore = movie.imdbRating;
        }
        let rottenScore = "";
        if (movie.Ratings[1]) {
            rottenScore = movie.Ratings[1].Value;
        } else {
            rottenScore = "is not rated"
        }
        let movieCountry = movie.Country;
        let movieLang = movie.Language;
        let moviePlot = movie.Plot;
        let actors = movie.Actors;
        let bannerFill = "";
        let marquis = `${movieTitle} (${movieYear})`;
        let marquisLength = marquis.length;
        console.log(marquisLength);
        for (let j = 0; j < marquisLength; j++) {
            bannerFill += "~";
        }

        console.log(`
    ~~~~~~~~~~~~~~~~~~~~${bannerFill}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    -------========<<<<<<<<| ${marquis}) |>>>>>>>>========-------
    ~~~~~~~~~~~~~~~~~~~~${bannerFill}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    '${movieTitle}' was released in the ${movieCountry} in ${movieLang}. 
    It is rated ${imdbScore} on IMDB and ${rottenScore} on Rotten Tomatoes.

    Starring: ${actors}

    Plot: ${moviePlot}
        `)

    })
} 

if (!process.argv[2]) {
    console.log("HIT!");
} else {
    
}