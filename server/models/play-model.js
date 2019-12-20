const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlaySchema = new Schema({
    playType: { type: String, required: true },
    gainLoss: { type: Object, required: false },
    playDist: { type: Object, required: true },
    player1: { type: String, required: true },
    player2: { type: String, required: false },
    result: { type: String, required: true },
    min: { type: String, required: true },
    sec: { type: String, required: true },
    quarter: { type: String, required: true }
  })
module.exports = PlaySchema