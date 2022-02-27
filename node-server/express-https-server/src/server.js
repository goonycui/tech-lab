
const app = require("./app")
const https = require("https");
const fs = require('fs');
const path = require('path');

const port = 8443;

https.createServer(
	
	{
		key: fs.readFileSync(path.join(__dirname, '..', 'certs', 'LeafCert', 'leaf-private.pem')),
		cert: fs.readFileSync(path.join(__dirname, '..', 'certs', 'LeafCert', 'leaf-cert.crt')),
        ca: [ 
          fs.readFileSync(path.join(__dirname, '..', 'certs', 'CA', 'ca-cert.pem'))
        ],
        // Requesting the client to provide a certificate, to authenticate.
        requestCert: true,
        // As specified as "true", so no unauthenticated traffic
        // will make it to the specified route specified
        rejectUnauthorized: true
	}

	,app).listen(port, () => console.log(`The server is listening on port ${port}`));
