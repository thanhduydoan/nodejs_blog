const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);

  //   app.get("/news", (req, res) => {
  //     console.log(req.query.q);
  //     res.render("new");
  //   });
}

module.exports = route;
