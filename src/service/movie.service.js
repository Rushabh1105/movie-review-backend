const {createMovie} = require('../repository/movie.repository.js');

const addMovie = async(data) => {
    try {
        const movieData = {
            name: data.name,
            desc: data.desc,
            genre: data.genre,
            releaseYear: data.releaseYear,
            poster: data.poster,
        }

        const response = await createMovie(movieData);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addMovie,
}