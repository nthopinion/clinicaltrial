const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send([
    { id: 1, name: "John" },
    { id: 2, name: "Susan" },
    { id: 3, name: "Mike" },
    { id: 4, name: "Mason" },
  ]);
});

module.exports = app;
