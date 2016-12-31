var express = require('express');
var path = require('path');

var puppyRouter = require('./src/routes/puppyRoutes'); 
var list = require('./src/data/somedata').dog; 

var port = 5000; 

var app = new express(); 

app.use(express.static('public')); 

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/src/views/index.html')); 
}); 

app.get('/Kittens', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/images/kitten.jpg')); 
});

app.get('/Render', function(req, res) {
    res.render('index', {
        data: "This sentence was rendered from app.js", 
        list: list
    }); 
});


app.use('/Puppies', puppyRouter); 

app.listen(port, function() {
    console.log('listening on port ' + port);
});