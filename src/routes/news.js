const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

const apiKey = 'a66afa0ac1cc42d484989eca31f4dbff';

//prepends words for Search Results
let removals= "-coronavirus, -pandemic, -COVID";
let domNews=require('news');


newsRouter.get('', async(req, res)=> {
    
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${removals}&apiKey=${apiKey}&pageSize=1&sortBy=popularity`);
        const object = newsAPI.data;
        const articles = object["articles"];
        res.render('news', { articles: articles });
    } catch (err) {
            console.error('Error', err.message);    
    }
});

newsRouter.post('/results', async(req, res)=> {
    let searchQuery = req.body.search;
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${removals},+${searchQuery}&apiKey=${apiKey}&pageSize=1&sortBy=popularity`);
        const object = newsAPI.data;
        const articles = object["articles"];
        res.render('searchedNews', { articles: articles });
    } catch (err) {
            console.error('Error', err.message);    
    }
});




 newsRouter.get('',(req,res)=>{
     getNews(req,res);
 });



module.exports = newsRouter;

