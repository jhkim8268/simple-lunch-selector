const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config()


app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/drinks', (req, res) => {
    axios.get(`https://pixabay.com/api/?key=${process.env.APIKEY}&q=drinks&image_type=photo`)
        .then((result) => {
            res.send(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});

app.get('/foods', (req, res) => {
    axios.get(`https://pixabay.com/api/?key=${process.env.APIKEY}&q=meal&image_type=photo`)
        .then((result) => {
            res.send(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});

module.exports = app;