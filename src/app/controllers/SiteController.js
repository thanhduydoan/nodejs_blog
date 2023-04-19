class SiteController {
  //[GET]
  index(req, res) {
    res.render("home");
  }

  //   [GET] /search
  search(req, res) {
    res.render("feature");
  }
}
module.exports = new SiteController();
