import newsRouter from './news.js';
import siteRouter from './site.js';

function route(app) {
  app.use('/news', newsRouter);

  app.use('/', siteRouter);

  app.get('/search', (req, res) => {
    res.render('search');
  });

  app.post('/search', (req, res) => {
    console.log(req.body);

    res.render('search');
  });
}

export default route;
