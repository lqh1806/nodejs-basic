import Course from '../models/Course.js';
import {
  moongoseToObject,
  multipleMongooseToObject,
} from '../../util/mongoose.js';

class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          course: moongoseToObject(course),
        });
      })
      .catch(next);
  }

  // GET courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  //POST courses/store
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.send('COURSE SAVED'))
      .catch(next);
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', { course: moongoseToObject(course) })
      )
      .catch(next);
  }

  // UPDATE course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/store/courses'))
      .catch(next);
  }
}

export default new CourseController();
