const {createMovie, getMovie, deleteMovie, getAllMovies, updateMovie, updateStatus, addReview} = require('../repository/movie.repository.js');

const addMovie = async(data) => {
    try {
        const movieData = {
            name: data.name,
            desc: data.desc,
            genre: data.genre,
            releaseYear: data.releaseYear,
            poster: data.poster,
            director: data.director,
            actors: data.actors
        }

        const response = await createMovie(movieData);
        return response;
    } catch (error) {
        throw error;
    }
}

const removeMovie = async(id) => {
    try {
        const movie = await getMovie(id);
        if(!movie){
            throw new Error('movie not found');
        }

        return await deleteMovie(id);
    } catch (error) {
        throw error;
    }
}

const getMovieById = async(id) => {
    try {
        const movie = await getMovie(id);
        return movie;
    } catch (error) {
        
    }
}

const getAll = async() =>{
    try {
        const movies = await getAllMovies();
        return movies;
    } catch (error) {
        throw error;
    }
}

const updateMovieStatus = async(id) => {
    try {
        const movie = await getMovie(id);
        if(!movie){
            throw new Error('movie not found');
        }

        return await updateStatus(id);
    } catch (error) {
        
    }
}

const addMovieReview = async(id, data) => {
    try {
        if(!data.user || !data.rating){
            throw new Error('User and rating is required');
        }
       const response = await addReview(id, data);
       return response; 
    } catch (error) {
        
    }
}

const updateMovieData = async(id, data) => {
    try {
        const movie = await getMovie(id);
        if(!movie){
            throw new Error('movie not found');
        }

        return await updateMovie(id, data);
    } catch (error) {
        
    }
}

module.exports = {
    addMovie,
    removeMovie,
    getMovieById,
    getAll,
    updateMovieStatus,
    addMovieReview,
    addMovieReview,
    updateMovieData,
}