const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    actors: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['watched', 'unwatched'],
        default: 'unwatched'
    },
    ratings: [
        {
            user: {
                type: String,
            },
            rating: {
                type: Number,
                min: 0,
                max: 5,
            },
            review: {
                type: String,
            },
        }
    ]
});

const movieModel = new mongoose.model('Movie', movieSchema);

module.exports = movieModel;