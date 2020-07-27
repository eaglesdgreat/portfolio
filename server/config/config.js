require('dotenv').config

module.exports = {
  development: {
    username: process.env.DEV_USER || 'postgres',
    password: process.env.DEV_PASSWORD || 'Gud@Cot?1',
    database: process.env.DEV_DB || 'resume',
    host: process.env.DEV_HOST || 'localhost',
    port: process.env.DEV_PORT  || 5432,
    dialect: "postgres",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || 'VIN FA5B 3EC1 8452 8381 663',
  emailFrom: process.env.EMAIL_FROM || 'okponobiemmanuel@gmail.com',
  smtpOptions: {
    host: '[ENTER YOUR OWN SMTP OPTIONS OR CREATE FREE TEST ACCOUNT IN ONE CLICK AT https://ethereal.email/]',
    port: 587,
    auth: {
      user: '',
      pass: '',
    },
  }
}
