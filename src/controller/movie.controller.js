
const {addMovie, removeMovie, getMovieById, getAll, updateMovieStatus, addMovieReview, updateMovieData} = require('../service/movie.service.js');

const createMovie = async(req, res, next) => {
    try {
        const response = await addMovie(req.body);

        return res.json({
            success: true,
            message: 'New movie added',
            data: response,
            error: null,
        })
    } catch (error) {
        next(error);
    }
}


const deleteMovie = async(req, res, next) => {
    try {
        const response = await removeMovie(req.params.id);
        console.log('here')
        return res.json({
            success: true,
            message: 'Movie deleted',
            error: null,
            data: response,
        })
    } catch (error) {
        next(error)
    }
}

const getMovie = async(req, res, next) => {
    try {
        const response = await getMovieById(req.query.id);
        return res.json({
            success: true,
            message: 'fetched the movie',
            error: null,
            data: response
        })
    } catch (error) {
        next(error)
    }
}

const getAllMovies = async(req, res, next) => {
    try {
        const response = await getAll();
        return res.json({
            success: true,
            message: 'fetched all movies',
            error: null,
            data: response,
        })
    } catch (error) {
        next(error)
    }
}

const updateStatus = async(req, res, next) => {
    try {
        const response = await updateMovieStatus(req.params.id);

        return res.json({
            success: true,
            message: 'updated the status',
            error: null,
            data: response,
        })
    } catch (error) {
        
    }
}

const addReview = async(req, res, next) => {
    try {
        const response = await addMovieReview(req.params.id, req.body);

        return res.json({
            success: true,
            message: 'Review added',
            error: null,
            data: response,
        })
    } catch (error) {
        
    }
}

const updateMovie = async(req, res, next) => {
    try {
        const response = await updateMovieData(req.params.id, req.body);

        return res.json({
            success: true,
            message: 'updated the data',
            error: null,
            data: response
        })
    } catch (error) {
        
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovie,
    getAllMovies,
    updateStatus,
    addReview,
    updateMovie
}