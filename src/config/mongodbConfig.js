
const mongoose = require('mongoose');

const { DB_URL } = require("./serverConfig.js"); 

const connectToMongoDB = async() => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB conected successfully...');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectToMongoDB};