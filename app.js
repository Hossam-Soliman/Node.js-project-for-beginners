



var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var ejs = require('ejs');
app.set ('view engine', 'ejs');

app.get('/', function(req, res){

    res.send('THIS IS ALREADY MY FIRST APP');
});

app.get('/home', function(req, res){

    res.render('index');
});


app.get('/contact', function(req, res){

    res.render('contact');
});

app.post('/contact', urlencodedParser, function(req, res){

    res.render('contact-success', {data: req.body});
});


app.get('/profile/:name', function(req, res){

    var data = {age: 30, job: 'UI/UX developer', hobbies: ['football','reading', ' and travelling']}

    res.render('profile', {person: req.params.name, data: data});
});

console.log('Hey baby');
app.listen (3000);

