
var https = require('https'); // Import Node.js core module
const fs = require('fs');
const path = require('path');

var port = 8443;

var server = https.createServer(
	
	{
		key: fs.readFileSync(path.join(__dirname, 'certs', '2nd', '2nd-private.pem')),
		cert: fs.readFileSync(path.join(__dirname, 'certs', '2nd', '2nd-cert.crt'))
	}

	,function (req, res) {
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
