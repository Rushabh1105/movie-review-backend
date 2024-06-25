
const express = require('express');
const bodyParser = require('body-parser');


const {PORT} = require('./src/config/serverConfig.js');
const { connectToMongoDB } = require('./src/config/mongodbConfig.js');
const router = require('./src/routes/movie.routes.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/movie', router);

app.get('/', (req, res) => {
    res.json({
        messsage: 'hello'
    })
});


app.listen(PORT, async () => {
    await connectToMongoDB();
    console.log('Server started successfully...');
})