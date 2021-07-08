const express = require('express');
const app = express();
const testJson = require('./test/test.json');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello NodeJs!!");
    //res.json(testJson)
});

const server = app.listen(7000, function () {
    console.log("Express1s startd on port 7000");
});