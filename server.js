var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

















// var http = require("http"),
//     url = require("url"),
//     path = require("path"),
//     fs = require("fs")
//     port = process.argv[2] || 8888;

// http.createServer(function(request, response) {

//   var uri = url.parse(request.url).pathname
//     , filename = path.join(process.cwd(), uri);

//   var contentTypesByExtension = {
//     '.html': "text/html",
//     '.css':  "text/css",
//     '.js':   "text/javascript"
//   };

//   fs.exists(filename, function(exists) {
//     if(!exists) {
//       response.writeHead(404, {"Content-Type": "text/plain"});
//       response.write("404 Not Found\n");
//       response.end();
//       return;
//     }

//     if (fs.statSync(filename).isDirectory()) filename += '/index.html';

//     fs.readFile(filename, "binary", function(err, file) {
//       if(err) {        
//         response.writeHead(500, {"Content-Type": "text/plain"});
//         response.write(err + "\n");
//         response.end();
//         return;
//       }

//       var headers = {};
//       var contentType = contentTypesByExtension[path.extname(filename)];
//       if (contentType) headers["Content-Type"] = contentType;
//       response.writeHead(200, headers);
//       response.write(file, "binary");
//       response.end();
//     });
//   });
// }).listen(parseInt(port, 10));

// console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown")

// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8000);	
// var port = process.env.PORT || 8000;