const _ = require('lodash')
const crypto = require('crypto')

const db = require('./../models/user')

// function encryptPassword(value) {
//   function makeSalt() {
//     return Math.round((new Date().valueOf() * Math.random())) + ''
//   }
//   if (!value) return ''
//   try {
//     return crypto.createHmac('sha1', makeSalt()).update(value).digest('hex')
//   } catch (err) {
//     return ''
//   }
// }

function createUser(req, res) {
  // req.body.password = encryptPassword(req.body.password)
  db.User.create(req.body)
    .then((result) => {
      return res.status(200).send({
        message: `${result.firstName} account created successfully`
      })
    })
    .catch((err) => {
      return res.status(400).json({
        error: `${err} Cannot create your account`
      })
    })
}

function listUser(req, res) {
  db.User.findAll()
    .then((result) => {
      return res.status(200).json(result)
    })
    .catch((err) => {
      return res.status(404).json({
        error: `${err} cant retrieve data`
      })
    })
}

function userById(req, res, next, id) {
  db.User.findOne({ where: { userId: id } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: 'User not found',
        })
      }
      req.profile = user
      next()
      return req.profile
    })
    .catch((err) => {
      console.log(err)
    })
}

function getUser(req, res) {
  req.profile.hashed_password = undefined
  return res.status(200).json(req.profile)
}

function updateUser(req, res) {
 let user = req.profile
 user = _.extend(user, req.body)
 db.User.update(user, { where : { userId: req.profile.userId } })
  .then((result) => {
    result.hashed_password = undefined
    return res.status(200).json(result)
  })
  .catch((err) => {
    return res.status(401).json({
      error: 'Update fail try again',
    })
  })
}

function deleteUser(req, res) {
  const user = req.profile
  db.User.destroy({ where: {userId: user.userId } })
    .then((result) => {
      return res.status(200).json({
        message: `Your account has been deleted`
      })
    })
    .catch((err) => {
      return res.status(401).json({
        error: `${err} error deleting account`
      })
    })
}

module.exports = {
  createUser,
  userById,
  getUser,
  updateUser,
  listUser,
  deleteUser,
}
