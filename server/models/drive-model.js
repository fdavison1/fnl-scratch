const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PlaySchema = require('./play-model')

const DriveModel = new Schema({
  driveCount: { type: Number, required: false },
  team: { type: String, required: true },
  fieldSide: { type: String, required: true },
  yardLine: { type: Number, required: true },
  plays: [Object]
})

module.exports = mongoose.model('drive', DriveModel)