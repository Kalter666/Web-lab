const express = require('express');
const app = express();
const template = require('consolidate');
app.engine('pug', template.pug);
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/lesson1', (req, res) => {
   res.render('lesson1');
});

app.get('/lesson2', (req, res) => {
    res.render('lesson2');
});
app.get('/lesson3', (req, res) => {
    res.render('lesson3');
});
app.listen(3000);
console.log('server start successful at 3000');