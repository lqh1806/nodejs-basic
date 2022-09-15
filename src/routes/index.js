import newsRouter from './news.js';
import siteRouter from './site.js';
import courseRouter from './courses.js';
import meRouter from './me.js';

function route(app) {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
  app.use('/courses', courseRouter);
  app.use('/me', meRouter);

  app.get('/search', (req, res) => {
    res.render('search');
  });

  app.post('/search', (req, res) => {
    console.log(req.body);

    res.render('search');
  });
}

export default route;
