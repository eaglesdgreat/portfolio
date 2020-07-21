const Sequelize = require('sequelize')
const config = require('./config')

const options = {
  dialect: config.development.dialect,
  host: config.development.host,
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
}
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  options
)

module.exports = sequelize
