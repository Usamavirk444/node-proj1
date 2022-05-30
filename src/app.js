// require express
const express = require('express');
// require ejs
const ejs = require('ejs')
    // require config file
const config = require('./config/config')
    // body parser
const bodyParser = require("body-parser");
//cookie- parser require
const cookieParser = require('cookie-parser');

// use express or call the first function of express
const app = express()

//clearing cahce
app.disable('view cache');
// use cookie parser
app.use(cookieParser())

// Configurations for "body-parser"
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

//convet data into json
app.use(express.json())

//set ejs view engine
app.set('view engine', 'ejs')
    //making a static folder for CSS
app.use(express.static('public'))

// import user from user route
const User = require('./routes/index');

//use route 
app.use('/', User)




app.listen(config.port.PORT, console.log('this serve is runing on ' + config.port.PORT))