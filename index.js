
const express = require('express');
const bodyParser = require('body-parser');


const {PORT} = require('./src/config/serverConfig.js');
const { connectToMongoDB } = require('./src/config/mongodbConfig.js');
const router = require('./src/routes/movie.routes.js');


const app = express();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/movie', router);


app.listen(PORT, async () => {
    await connectToMongoDB();
    console.log('Server started successfully...');
})