const express = require('express')

const auth = require('./../controllers/auth.controllers')

const router = express.Router()

router.route('/api/auth/signin')
  .post(auth.signin)

module.exports = router;
