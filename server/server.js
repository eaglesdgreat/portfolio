const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const path = require('path')

const sequelize = require('./config/db.config')
const config = require('./config/config')
const userRoute = require('./routes/user.routes')
const authRoute = require('./routes/auth.routes')
const errorHandler = require('./_helpers/error.handler')

// Initializing express app
const app = express()

// configuring the postgres database with sequelize and testing connection2
sequelize.authenticate()
  .then(() => {
    console.log('Connected to database successfully')
  })
  .catch((err) => {
    console.log('Unable to connect to database', err)
  })

// express middleware configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(compression())

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/', userRoute)
app.use('/', authRoute)

app.get('/', (req, res) => {
  res.send('Initial Page')
})

app.use(errorHandler)

app.listen(config.port, (err) => {
  if (err) { console.log(err) }
  console.log(`Server running on port ${config.port}`)
})
