
const express = require("express");
const path = require("path");
const app = express();

module.exports = app;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/test", (req, res) => {
	res.send("Testing works!");
});

app.get("/index", (req, res) => {
	res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/trigger/http", (req, res) => {
	simpleHttpReq();
	res.send("Triggered!");
});

app.get("/trigger/https", (req, res) => {
	simpleHttpsReq();
	res.send("Triggered!");
});

const axios = require('axios');
function simpleHttpReq() {
	axios.get('http://localhost:8581/test')
	.then(res => console.log(res.data))
	.catch(err => console.log(err));
}

const https = require("https");
const fs = require('fs');
function simpleHttpsReq() {
	const httpsAgent = new https.Agent({
		cert: fs.readFileSync(path.join(__dirname, '..', 'certs', 'LeafCert', 'leaf-cert.crt')),
		key: fs.readFileSync(path.join(__dirname, '..', 'certs', 'LeafCert', 'leaf-private.pem')),
		ca: [
			fs.readFileSync(path.join(__dirname, '..', 'certs', 'CA', 'ca-cert.pem'))
		  ]
	  });
	
	axios.get('https://localhost:8443/test', {httpsAgent})
	.then(res => console.log(res.data))
	.catch(err => console.log(err));
}
