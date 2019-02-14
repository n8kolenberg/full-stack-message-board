const express = require('express')
const cors = require('cors')
const morgan = require('morgan') // logs all your server requests
const bodyParser = require('body-parser') // allows your back-end to parse data sent from the front end - e.g. JSON sent from front end can be turned into JSON object before being stored in database
const messages = require('../db/messages')

const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Full Stack Messaging Board 🎉'
  })
})

app.get('/messages', (req, res) => {
  messages.getAll()
    .then((messages) => {
      res.json(messages)
    })
})

app.post('/messages', (req, res) => {
  console.log(req.body) // whatever was sent to the server
  messages.create(req.body) // this is what we're inserting to the db
    .then((message) => {
      res.json(message)
    })
    .catch((error) => {
      res.status(500)
      res.json(error)
    })
})

const port = process.env.PORT || 8081

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
