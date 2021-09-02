const express = require('express');
const app = express();



app.get('/', (req, response) => { //andmed, mis tulevad kasutaja poolt??
    console.log(req);
    response.send('Hello World!');
});

app.get('/contact', (req, response) => { //andmed, mis tulevad kasutaja poolt??
    console.log(req);
    response.send('535252626');
});

app.get('*', (req, res) => {
    res.send("404 not found");
});

app.listen(3000, function () {
    console.log("Server is running on 3000");
});