const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const g = require('./controllers/game-ctrl')
const { SERVER_PORT, DB_STRING } = process.env
 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose
  .connect(
    DB_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Db is connected')
    app.listen(SERVER_PORT, () => {
      console.log(`Self destruct in ${SERVER_PORT}`)
    })
  })
  .catch(e => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


//ENDPOINTS
app.get('/api/games/:state', g.getGames)
app.get('/api/game/:id', g.getGame)
app.put('/api/game', g.updateGame)
app.put('/api/game/drive', g.updateDrives)
