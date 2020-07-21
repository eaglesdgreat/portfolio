const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const crypto = require('crypto')

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
  db.User.findOne(req.body, { where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: 'Invalid email Address',
        })
      }

      if (!(isAuthenticate(req.body.password, user.salt) === user.hashed_password)) {
        console.log(user.hashed_password+ ' and '+ isAuthenticate(req.body.password, user.salt))
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

function hasAuthorization(req, res, next) {
  const authorized = req.profile && req.auth && req.profile.userId === req.auth._id
  if(!authorized){
    return res.status(401).json({
      message: 'User not authorized',
    })
  }
  next()
  return authorized
}

module.exports = {
  signin,
  requiredSignIn,
  hasAuthorization,
  encryptPassword,
}