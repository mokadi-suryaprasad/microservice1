const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    console.log('Request URL:', req.url);
    res.send('<h1>microservice11!</h1>');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
