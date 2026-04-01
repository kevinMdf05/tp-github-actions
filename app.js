const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Bienvenue sur notre application Express !')
})

module.exports = app
