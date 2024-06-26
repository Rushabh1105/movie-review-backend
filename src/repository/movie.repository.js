const movieModel = require('../schema/movie.schema.js');

const createMovie = async(data) => {
    try {
        const response = await new movieModel(data).save();
        return response;
    } catch (error) {
        throw error
    }
}

const updateMovie = async(id, data) => {
    try {
        const response = await movieModel.findByIdAndUpdate(id, data);
        return response;
    } catch (error) {
        throw error;
    }
}

const deleteMovie = async (id) =>{
    try {
        await movieModel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        throw error;
    }
}
    
const getMovie = async(id) => {
    try {
        const response = await movieModel.findById(id);
        return response;
    } catch (error) {
        throw error;
    }
}

const getAllMovies = async() => {
    try {
        const response = await movieModel.find();
        return response;
    } catch (error) {
        throw error;
    }
}


const updateStatus = async(id) => {
    try {
        const movie = await getMovie(id);
        let sts;
        if(movie.status == 'unwatched'){
            sts = 'watched';
        }else{
            sts = 'unwatched'
        }
        console.log(sts);
        const response = await movieModel.findByIdAndUpdate(id, {status: sts});
        return response;
    } catch (error) {
        throw error;
    }
}

const addReview = async(id, data) => {
    try {
        const movie = await getMovie(id);
        movie.ratings.push(data);
        await movie.save();
        return movie;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovie,
    getAllMovies,
    updateStatus,
    addReview,
}