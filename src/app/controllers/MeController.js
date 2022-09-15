import Course from '../models/Course.js';
import {
  moongoseToObject,
  multipleMongooseToObject,
} from '../../util/mongoose.js';

class MeController {
  storeCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

export default new MeController();
