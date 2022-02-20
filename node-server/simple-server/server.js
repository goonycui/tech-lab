
var http = require('http'); // Import Node.js core module

var port = 35951;

var server = http.createServer(function (req, res) {
	if ( '/' == req.url ) {
		res.writeHead(200, { 'Content-Type': 'text/html' } );

		res.write( '<html><body><p>This is home Page.</p></body></html>' );
		res.end();
	}
	else if ( '/test' == req.url ) {
		res.writeHead(200, { 'Content-Type': 'text/html' } );

		res.write( '<html><body><p>This is test Page.</p></body></html>' );
		res.end();
	}
	else
		res.end( 'Invalid Request!' );

});

server.listen(port);

console.log('Node.js web server at port ' + port + ' is running...' );
