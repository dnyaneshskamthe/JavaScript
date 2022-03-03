const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if(operation=="add")
    {
        movies.push(movie)
    }
    if(operation=="remove")
    {
        movies.pop(movie)
    }
}

module.exports = favouriteMovie;
