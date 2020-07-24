'use strict';
const {
  Model
} = require('sequelize');
const { encryptPassword } = require('./../controllers/auth.controllers');

function makeSalt() {
  return Math.round((new Date().valueOf() * Math.random())) + ''
}

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Your firstName is required'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Your lastName is required'
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notNull: true
      },
      comment: 'Email must be left unique no more than one User can have one email'
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Your middleName is required'
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Salt generated for hashing password'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'hashed password store in the database',
      set: function (pass) {
        this.setDataValue('salt', makeSalt())
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
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    comment: 'This is the table for my resume backend data',
  });
  return User;
};