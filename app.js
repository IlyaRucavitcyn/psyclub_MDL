
var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 4000));
app.use(express.static(__dirname + '/'));

app.set('views', __dirname + '/');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

module.exports = app;
