const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname + '/../public')
// console.log(__dirname + '/../public');
console.log(publicPath);

var app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('Listening on 3000');
});