import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../../../config/param-validation';
import postCtrl from '../controllers/post.controller';
import config from '../../../config/config';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /v1/post - Get list of posts */
  .get(
    expressJwt({ secret: config.jwtSecret }),
    postCtrl.list
  )
  /** POST /v1/post - Create new post */
  .post(
    expressJwt({ secret: config.jwtSecret }),
    validate(paramValidation.createPost),
    postCtrl.create
  );

router.route('/:postId')
  /** GET v1/post/:postId */
  .get(
    expressJwt({ secret: config.jwtSecret }),
    postCtrl.get
  );

export default router;