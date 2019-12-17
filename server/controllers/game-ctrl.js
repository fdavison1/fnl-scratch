const Game = require('../models/game-model')

module.exports = {

    getGames: async (req, res) => {
        // console.log(req.params)
        await Game.find({ state: req.params.state} , { 
            'home.color': 1, 
            'home.school': 1,
            'home.mascot': 1,
            'away.color' : 1,
            'away.school': 1,
            'away.mascot': 1,
            start_time: 1
        }, 
            
            (err, games) => {

            if (err) {
                return res.status(400).json({ success: false, error: err })
            }

            if (!games.length){
                return res.status(404).json({ success: false, error: 'no games found'})
            }
            return res.status(200).json({sucess: true, data: games})
        }).catch(err => console.log(err))
    },

    getGame: async (req, res) => {
        await Game.findOne({ _id: req.params.id }, (err, game) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }

            if (!game) {
                return res.status(404).json({ success: false, error: 'Game not found'})
            }

            return res.status(200).json({ success: true, data: game })
        }).catch(err => console.log(err))
    },



    updateGame: async (req, res) => {
        const body = req.body
        if (!body) {
          return res.status(400).json({
            success: false,
            error: 'You must provide a body to update'
          })
        }
        console.log(body._id)
        Game.findOne({ _id: body._id}, (err, game) => {
          if (err) {
            return res.status(404).json({
              err,
              message: 'Game not found!'
            })
          }
          game.home = body.home
          game.away = body.away
          game.city = body.city
          game.state = body.state
          game.start_time = body.start_time
          game.date = body.date
          game.drives = [...body.drives ]
            game.save()
            .then((game) => {
              return res.status(200).json({
                success: true,
                id: game._id,
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
      }
    }