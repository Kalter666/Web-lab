const express = require('express');
const app = express();
const template = require('consolidate');
app.engine('pug', template.pug);
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/lesson1', (req, res) => {
   res.render('lesson1');
});

app.listen(3000);