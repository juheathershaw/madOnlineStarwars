const express = require('express');
const axios = require('axios');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    console.log("COR IS MY WHORE");
    next();
});

app.get('/hello', async (req, res) => {
    console.log("FUCK YEAH");
    axios.get('https://swapi.dev/api/people/' + Math.floor(Math.random() * 80))
        .then(response => {
        console.log(response.data);
        response.data["madOnlineProof"] = true;
        res.send(response.data);
        })
        .catch(error => {
        console.log(error);
        });
});

app.listen(process.env.PORT || 8085);
