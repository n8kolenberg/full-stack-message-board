// In this file, we define our connection to the Mongo DB

const monk = require('monk')

const connectionString = 'localhost/messageboard' // This is the connection to our db. Localhost points to mongodb on my machine. messageboard is the name of the db.

const db = monk(connectionString)

module.exports = db
