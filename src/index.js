const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const app = express();
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

//Home, search, contact

//Routes init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at: http://localhost:${port}/`)
);
