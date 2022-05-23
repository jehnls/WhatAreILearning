const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

app.get("/movies", (req, res) => {
  res.json({ msg: "Hello I'm movies" });
});

app.listen(3000, () => console.log("listen server movies"));
