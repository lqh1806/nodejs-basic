import express from 'express';
const router = express.Router();

import meController from '../app/controllers/MeController.js';

router.get('/store/courses', meController.storeCourses);

export default router;
