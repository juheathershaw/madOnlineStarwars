const express = require('express');
// path = require('path'),
routes = require('./routes/routes');
script = require('./script');

const app = express();

// app.get('/hello', (req, res) => {
//     console.log("FUCK YEAH");
// });

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.get('/api', script.api);

app.listen(8085);
