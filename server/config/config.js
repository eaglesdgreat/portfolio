require('dotenv').config

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || 'VIN FA5B 3EC1 8452 8381 663',
  development: {
    username: process.env.DEV_USER || 'postgres',
    password: process.env.DEV_PASSWORD || 'Gud@Cot?1',
    database: process.env.DEV_DB || 'resume',
    host: process.env.DEV_HOST || 'localhost',
    port: process.env.DEV_PORT  || 5432,
    dialect: "postgres",
  },
}
module.exports = config
