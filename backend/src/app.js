const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const { errorHandler, notFoundHandler } = require("./middlewares/handlers");

const app = express(),
  server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

app.set("io", io);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use("/", require("./routes"));
app.use(notFoundHandler);
app.use(errorHandler);
io.on("connection", require("./controllers/ioController"));

module.exports = app;