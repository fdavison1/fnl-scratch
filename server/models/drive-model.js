const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DriveSchema = new Schema({
  driveCount: { type: Number, required: false },
  team: { type: String, required: true },
  fieldSide: { type: String, required: true },
  yardLine: { type: Number, required: true },
  plays: { type: [Object], required: false }
})


module.exports = DriveSchema