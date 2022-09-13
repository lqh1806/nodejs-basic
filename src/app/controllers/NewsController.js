class NewsController {
  //[GET] /news
  index(req, res) {
    res.render('news');
  }

  show(req, res) {
    res.send('News details');
  }
}

export default new NewsController();
