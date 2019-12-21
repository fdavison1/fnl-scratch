const { GameModel } = require('../models/game-model')
// const DriveSchema = require('../models/drive-model')
const DriveModel = require('../models/drive-model')

module.exports = {
  getGames: async (req, res) => {
    await GameModel.find(
      { state: req.params.state },
      {
        status: 1,
        'home.color': 1,
        'home.school': 1,
        'home.mascot': 1,
        'away.color': 1,
        'away.school': 1,
        'away.mascot': 1,
        start_time: 1
      },

      (err, games) => {
        if (err) {
          return res.status(400).json({ success: false, error: err })
        }

        if (!games.length) {
          return res
            .status(404)
            .json({ success: false, error: 'no games found' })
        }
        return res.status(200).json({ sucess: true, data: games })
      }
    ).catch(err => console.log(err))
  },

  getGame: async (req, res) => {
    await GameModel.findOne({ _id: req.params.id }, (err, game) => {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }

      if (!game) {
        return res.status(404).json({ success: false, error: 'Game not found' })
      }

      return res.status(200).json({ success: true, data: game })
    }).catch(err => console.log(err))
  },

  updateGame: async (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
      return res.status(400).json({
        success: false,
        error: 'You must provide a body to update'
      })
    }
    GameModel.findOne({ _id: body._id }, (err, game) => {
      if (err) {
        return res.status(404).json({
          err,
          message: 'Game not found!'
        })
      }
      game.status = body.status
      game.home = body.home
      game.away = body.away
      game.city = body.city
      game.state = body.state
      game.start_time = body.start_time
      game.date = body.date
      game.drivesArr = body.drivesArr
      game.score = body.score
      game
        .save()
        .then(gameRes => {
          return res.status(200).json({
            success: true,
            game: gameRes,
            message: 'Game updated!'
          })
        })
        .catch(error => {
          return res.status(404).json({
            error,
            message: 'Game not updated!'
          })
        })
    })
  },
  updateDrives: (req, res) => {
    const { id, drive } = req.body
    // console.log(drive)

    GameModel.findOne({ _id: id }, async (err, gameRes) => {
      if (err) {
        return res.status(404).json({
          err,
          message: 'Game not found!'
        })
      }
      gameRes.drivesArr.push(drive)
      gameRes
        .save()
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err => console.log(err))
    })
  },
  addPlay: (req, res) => {
    const { playObj, driveId, gameId } = req.body
    console.log(req.body)
    GameModel.findOne({ _id: gameId }, async (err, game) => {
      if (err) {
        return res.status(404).json({
          err,
          message: 'Game not found!'
        })
      }
      const drive = await game.drivesArr.id(driveId)
        drive.plays.push(playObj)
        game
          .save()
          .then(result => {
            console.log(result)
            
            res.status(200).json(result)
          })
          .catch(err => console.log(err))

      
    })
  }
}
