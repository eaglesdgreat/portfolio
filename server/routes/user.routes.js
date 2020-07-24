const express = require('express')
const auth = require('./../controllers/auth.controllers')
const user = require('./../controllers/user.controllers')

const router = express.Router()

router.route('/api/me')
  .get(user.listUser)
  .post(user.createUser)

router.route('/api/me/:userId')
  .get(auth.requiredSignIn, auth.hasAuthorization, user.getUser)
  .put(auth.requiredSignIn, auth.hasAuthorization, user.updateUser)
  .delete(user.deleteUser)

router.param('userId', user.userById)

module.exports = router;
