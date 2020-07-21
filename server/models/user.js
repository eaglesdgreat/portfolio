'use strict';

const Sequelize = require('sequelize')
const crypto = require('crypto')
const sequelize = require('./../config/db.config');

function encryptPassword(value, salt) {
  if (!value) return ''
  try {
    return crypto.createHmac('sha1', salt).update(value).digest('hex')
  } catch (err) {
    return ''
  }
}

function makeSalt() {
  return Math.round((new Date().valueOf() * Math.random())) + ''
}

const User = sequelize.define('user', {
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  middleName: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notNull: true
    },
    comment: 'Email must be left unique no more than one User can have one email',
  },
  salt: { type: Sequelize.STRING, allowNull: false },
  hashed_password: {
    type: Sequelize.STRING,
    allowNull: false,
    // get: function () {
    //   return this.getDataValue('password')
    // }
  },
  password: {
    type: Sequelize.VIRTUAL,
    allowNull: false,
    set: function (pass) {
      this.setDataValue('password', pass)
      this.setDataValue('salt', makeSalt())
      this.setDataValue('hashed_password', encryptPassword(pass, this.getDataValue('salt')))
    },
    validate: {
      isLongEnough: function (pass) {
        if (pass && pass.length < 9) {
          return new Error('Password must be at least 9 characters')
        }
        if (!pass) {
          return new Error('Password is required')
        }
      },
      // isAuthenticate: function (plainText) {
      //   return encryptPassword(plainText) === this.hashed_password
      // },
    }
  },
}, {
  // paranoid: true,
  comment: 'This is the table for my resume backend data',
  deletedAt: 'destroyData',
})

// sequelize.createSchema('Users').then(() => {
//   console.log('Schema created ')
// })

User.sync()
  .then(() => {
  console.log('Table created if not exist')
}).catch((err) => {
  console.log(`${err} cannot creat table`)
})

module.exports = {
  User,
  encryptPassword,
}
