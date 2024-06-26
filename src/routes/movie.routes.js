const express = require('express');

const {createMovie, deleteMovie, getMovie, getAllMovies, updateStatus, addReview, updateMovie} = require('../controller/movie.controller.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    if(req.query.id){
        getMovie(req, res, next)
    }else{
        getAllMovies(req, res, next);
    }
});
router.post('/new', createMovie);
router.delete('/delete/:id', deleteMovie);
router.patch('/update/:id', updateStatus);
router.put('/review/:id', addReview);
router.put('/update/:id', updateMovie);

module.exports = router;