const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
// const path = require('path')

const app = express()

const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(compression())

// app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Initial Page')
})

app.listen(port, (err) => {
  if (err) { console.log(err) }
  console.info('server running on port 4000')
})