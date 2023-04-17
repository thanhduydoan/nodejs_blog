const express = require("express");
const app = express();

//route
app.get("/trang-chu", function (req, res) {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello World");
});

app.listen(3005);
