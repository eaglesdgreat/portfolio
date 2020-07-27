'use strict';

const { encryptPassword } = require('./../controllers/auth.controllers');

function makeSalt() {
  return Math.round((new Date().valueOf() * Math.random())) + ''
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Your firstName is required'
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Your lastName is required'
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notNull: true
        },
        comment: 'Email must be left unique no more than one User can have one email'
      },
      middleName: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Your middleName is required'
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: false,
        set: function () {
          this.setDataValue('salt', makeSalt())
        },
        comment: 'Salt generated for hashing password'
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        set: function (pass) {
          this.setDataValue('password', encryptPassword(pass, this.getDataValue('salt')))
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
        },
        comment: 'hashed password store in the database',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Title of position',
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Role either Admin or User',
      },
      verifiedToken: { type: Sequelize.STRING },
      verified: { type: Sequelize.DATE },
      resetToken: {
        type: Sequelize.STRING,
        token: { type: Sequelize.STRING },
        expires: { type: Sequelize.DATE },
      },
      passwordReset: { type: Sequelize.DATE },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};