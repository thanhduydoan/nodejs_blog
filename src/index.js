const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
// Sử dụng view engine là handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("new");
});

app.listen(port, () =>
  console.log(`Example app listening at: http://localhost:${port}/`)
);
