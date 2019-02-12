const express = require('express')
const cors = require('cors')
const morgan = require('morgan') // logs all your server requests
const bodyParser = require('body-parser') // allows your back-end to parse data sent from the front end - e.g. JSON sent from front end can be turned into JSON object before being stored in database

const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Full Stack Messaging Board 🎉'
  })
})

const port = process.env.PORT || 8081

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
