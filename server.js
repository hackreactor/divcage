
var connect = require('connect');

var PORT = process.env.PORT || 8080
connect.createServer(
  connect.static(__dirname)
).listen(PORT);

console.log('Server is starting on ' + PORT);


