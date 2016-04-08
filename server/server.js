var express = require('express');

var app = express();

var democrats = ["Bernie Sanders", "Hillary Clinton", "Mr. Rogers", "Martin O'Malley", "Lincoln Chafee", "Matt Damon"];
var republicans = ["Donald Trump", "Ted Cruz", "John Kasich", "Jeb Bush", "Marco Rubio", "Ben Carson"];

app.use(express.static('server/public'));

app.get('/', function (request, response){
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/democrats', function(request, response){
  response.send(democrats);
});

app.get('/republicans', function(request, response){
  response.send(republicans);
});





var server = app.listen(3000, function(){
  var port = server.address().port
  console.log('listening on port ', port);
})
