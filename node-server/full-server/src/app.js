
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
