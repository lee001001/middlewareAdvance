const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
// const responseTime = require('response-time')
// const timestamp = require('time-stamp')
const moment = require('moment-timezone')
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

/*
const getDurationInMilliseconds = (start) => {
  const NS_PER_SEC = 1e9 //  NS = 1e9sec
  const NS_TO_MS = 1e6 // MS = 1e3
  const diff = process.hrtime(start)

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} [STARTED]`)
  const start = process.hrtime()

  res.on('finish', () => {
    const durationInMilliseconds = getDurationInMilliseconds(start)
    console.log(`${req.method} ${req.originalUrl} [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`)
  })

  res.on('close', () => {
    const durationInMilliseconds = getDurationInMilliseconds(start)
    console.log(`${req.method} ${req.originalUrl} [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`)
  })

  next()
})
*/

app.get('/', (req, res, next) => {
  const startTime = Date.now()
  req.request_time = moment(startTime).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss')

  res.on('finish', () => {
    const finishTime = Date.now()
    const duration = finishTime - startTime
    const severMessage = req.request_time +
      ' | ' + req.method + ' from ' +
      req.originalUrl + ' | total time: ' + duration + 'ms'
    console.log(severMessage)
  })
  return next()
})

app.get('/new', (req, res, next) => {
  const startTime = Date.now()
  req.request_time = moment(startTime).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss')

  res.on('finish', () => {
    const finishTime = Date.now()
    const duration = finishTime - startTime
    const severMessage = req.request_time +
      ' | ' + req.method + ' from ' +
      req.originalUrl + ' | total time: ' + duration + 'ms'
    console.log(severMessage)
  })
  return next()
})

app.get('/:id', (req, res, next) => {
  const startTime = Date.now()
  req.request_time = moment(startTime).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss')

  res.on('finish', () => {
    const finishTime = Date.now()
    const duration = finishTime - startTime
    const severMessage = req.request_time +
      ' | ' + req.method + ' from ' +
      req.originalUrl + ' | total time: ' + duration + 'ms'
    console.log(severMessage)
  })
  return next()
})

app.post('/', (req, res, next) => {
  const startTime = Date.now()
  req.request_time = moment(startTime).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss')

  res.on('finish', () => {
    const finishTime = Date.now()
    const duration = finishTime - startTime
    const severMessage = req.request_time +
      ' | ' + req.method + ' from ' +
      req.originalUrl + ' | total time: ' + duration + 'ms'
    console.log(severMessage)
  })
  return next()
})

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
