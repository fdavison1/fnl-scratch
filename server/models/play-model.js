const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlaySchema = new Schema({
    playType: String,
    gainLoss: Object,
    playDist: Object,
    player1: String,
    player2: String,
    result: String,
    min: String,
    sec: String,
    quarter: String
  })
module.exports = PlaySchema