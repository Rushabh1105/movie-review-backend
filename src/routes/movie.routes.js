const express = require('express');

const {createMovie} = require('../controller/movie.controller.js');

const router = express.Router();

router.get('/');
router.post('/', createMovie);


module.exports = router;