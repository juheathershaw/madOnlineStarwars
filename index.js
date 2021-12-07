const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    console.log("FUCK YEAH");
});

app.listen(8085);
