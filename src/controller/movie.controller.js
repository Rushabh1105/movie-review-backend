
const {addMovie} = require('../service/movie.service.js');

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

module.exports = {
    createMovie,
    
}