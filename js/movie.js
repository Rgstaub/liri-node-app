let omdb = require('omdb');
let title = "Star Wars";
console.log(omdb);
// let omdb = new Omdb ({
//     'title': title,

// })


omdb.get({title: "Star Wars"}, function(err, movie) {
    console.log(err);
    if(err) {
        return console.log(err);
    }
 
    // if(movie.length < 1) {
    //     return console.log('No movies were found!');
    // }

 
});