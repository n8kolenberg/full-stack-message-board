const Joi = require('joi')
const db = require('./connection') // requiring in the db
const moment = require('moment')

const messages = db.get('messages')

const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(40).required(),
  subject: Joi.string().required(),
  message: Joi.string().max(500).required(),
  imageUrl: Joi.string().uri({
    scheme: [
      /https?/
    ]
  })
})

const getAll = () => {
  return messages.find()
}

const create = (message) => {
  if (!message.username) message.username = 'Anonymous'
  const result = Joi.validate(message, schema)
  if (result.error == null) {
    message.created_at = moment().fromNow()
    return messages.insert(message)
  } else {
    return Promise.reject(result.error)
  }

}

module.exports = {
  getAll,
  create
}
