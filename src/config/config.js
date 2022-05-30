const path = require('path');
//import dotenv
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../../.env') });

const config = {
    port: {
        PORT: process.env.PORT
    }



}

module.exports = config