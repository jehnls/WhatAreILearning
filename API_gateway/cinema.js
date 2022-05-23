const express = require("express");

const app = express();

app.get("/cinemas", (req, res) => {
  res.json({ msg: "Hello I'm cinemas" });
});

app.listen(3001, () => console.log("listen server cinema"));
