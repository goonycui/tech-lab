
const express = require("express");

const app = express();

module.exports = app;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/test", (req, res) => {
	res.send("Testing works!");
});
