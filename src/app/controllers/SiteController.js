import Course from '../models/Course.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

class SiteController {
  //[GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = multipleMongooseToObject(courses);
        res.render('home', { courses });
      })
      .catch(next);

    // res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();
