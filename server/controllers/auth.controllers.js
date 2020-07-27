const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const crypto = require('crypto')
const { User } = require('./../models')

const config = require('./../config/config')

function encryptPassword(value, salt) {
  if (!value) return ''
  try {
    return crypto.createHmac('sha1', salt).update(value).digest('hex')
  } catch (err) {
    return ''
  }
}

function isAuthenticate(plainText, salt) {
  return encryptPassword(plainText, salt)
}

function signin(req, res) {
  User.findOne(req.body, { where: { email: req.body.email } })
    .then((user) => {
      console.log(user.userId)
      if (!user) {
        return res.status(401).json({
          error: 'Invalid email Address',
        })
      }

      if (!(isAuthenticate(req.body.password, user.salt) === user.password)) {
        console.log(user.password+ ' and '+ isAuthenticate(req.body.password, user.salt))
        return res.status(401).json({
          error: 'Email and Password do not match',
        })
      }

      const token = jwt.sign({
        _id: user.userId + Math.round((new Date().valueOf() * Math.random())),
        secret: config.jwtSecret,
      })

      return res.json({
        token,
        user: {
          _id: user.userId,
          email: user.email,
        },
      })
    })
    .catch((err) => {
      return res.status(401).json({
        error: `${err} check your email and password input`,
      })
    })
}

const requiredSignIn = expressJwt({
  secret: config.jwtSecret,
  algorithms: ['HS256'],
  userProperty: 'auth',
})

function hasAuthorization(req, res, next, roles = []) {
  // roles param can be a single role string (e.g. Role.User or 'User') 
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === 'string') {
    roles = [roles]
  }

  const authorized = req.profile && req.auth && req.profile.userId === req.auth._id
  if(!authorized || (roles.length && !roles.includes(req.profile.role))){
    return res.status(401).json({
      message: 'User not authorized',
    })
  }
  req.auth.role = req.profile.role
  next()
  return authorized
}

module.exports = {
  signin,
  requiredSignIn,
  hasAuthorization,
  encryptPassword,
}