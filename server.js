const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const port = process.env.PORT || 8000;

//Static Files
app.use(express.static('public'));

//app.use(express.json);

//Creates a middleware function to serve files from within a given root directory
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/js', express.static(__dirname + 'public/js'));


//Templating Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended : true }))


//Routes 
const newsRouter = require('./src/routes/news'); //gets news.js file

app.use('/', newsRouter);

//Listen on port 8000
app.listen (port, ()=> {
    console.log(`Listening on port ${port}`);
});