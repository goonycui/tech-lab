
const app = require("./app")
const https = require("https");
const fs = require('fs');
const path = require('path');

const port = 8443;

https.createServer(
	
	{
		key: fs.readFileSync(path.join(__dirname, '..', 'certs', '2nd', '2nd-private.pem')),
		cert: fs.readFileSync(path.join(__dirname, '..', 'certs', '2nd', '2nd-cert.crt'))
	}

	,app).listen(port, () => console.log(`The server is listening on port ${port}`));
