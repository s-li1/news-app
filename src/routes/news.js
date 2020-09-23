const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

const apiKey = 'a66afa0ac1cc42d484989eca31f4dbff';

//prepends words for Search Results
let searchQuery = "-(coronavirus, -pandemic, -COVID)";

newsRouter.get('', async(req, res)=> {
    
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}&pageSize=1`);
        const object = newsAPI.data;
        const articles = object["articles"];
        res.render('news', { articles: articles });
    } catch (err) {
            console.error('Error', err.message);    
    }
});

module.exports = newsRouter;

