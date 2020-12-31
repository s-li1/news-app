const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

const apiKey = 'a66afa0ac1cc42d484989eca31f4dbff';

//prepends words for Search Results
let removals= "-coronavirus, -pandemic, -COVID";


let totalPages;
const maxPages = 100;
const pageSize = 1;
const baseUrl = 'https://newsapi.org/v2/top-headlines?country=au';


const goToNews = async (req, res) => {
    try {
        const { page = 1 } = req.query;
        const response = await axios.get(`${baseUrl}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`);
        const news = response.data;
        totalPages = news.totalResults < maxPages ? news.totalResults : maxPages;
        res.locals.news = {
            articles: news.articles,
            totalPages,
            pageSize
        }
        res.render('news', { articles: news.articles });
    } catch (err) {
        console.error('Error', err.message);    
    }
}

newsRouter.get('/news', goToNews);



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




module.exports = newsRouter;

