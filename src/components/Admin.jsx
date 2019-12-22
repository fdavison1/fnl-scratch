import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PlayInputs from './PlayInputs'
import AfterTDInputs from './AfterTDInputs'

const Wrapper = styled.div`
  margin: 15px auto;
  border: 1px solid black;
  height: 100px;
  width: 850px;
  border-radius: 7px;
`

export default class Admin extends React.Component {
  state = {
    game: {},
    gameId: '',
   
    showAddDrive: true,
    team: '',
    fieldSide: '',
    yardLine: '',
    driveId: '',
    driveCount: 1,

    showAddPlay: false,
    playType: '',
    gainLoss: '',
    playDist: '',
    player1: '',
    player2: '',
    result: '',
    min: '',
    sec: '',
    quarter: 'first',
    kickType: '',
    playCount: 1,

    showAfterTD: false,
    afterTD: '',
    kicker: '',
    patRes: '',
    patBlocker: ''
  }

  componentDidMount = () => {
    this.setState({
      driveCount: this.props.game.drivesArr.length + 1,
      game: this.props.game,
      gameId: this.props.game._id
    })
  }

  handleChange = trg => {
    this.setState({ [trg.name]: trg.value })
  }

  submitDrive = () => {
    const { gameId, driveCount, team, fieldSide, yardLine } = this.state
    axios
      .put('/api/game/drive', {
        id: gameId,
        drive: { driveCount, team, fieldSide, yardLine, plays: [] }
      })
      .then(res => {
        const idLoc = res.data.drivesArr.length - 1
        this.setState({
          driveCount: driveCount + 1,
          showAddDrive: false,
          showAddPlay: true,
          game: res.data,
          driveId: res.data.drivesArr[idLoc]._id
        })
        this.props.updateGame(res.data)
      })
      .catch(err => console.log(err))
  }

  addScore = () => {
    let { team, result, quarter } = this.state
    let { score } = this.props.game
    let points = 0
    //extra point
    if (result === 'extra point') {
      points = 1
      this.setState({ showAddDrive: true,
      showAfterTD: false })
    }

    //2-pt
    if (result === '2 point') {
      points = 2
      this.setState({ showAddDrive: true, showAfterTD: false })
    }

    //FG
    if (result === 'Successful') {
      points = 3
      this.setState({ showAddDrive: true })
    }

    //TD
    if (result === 'touchdown') {
      points = 6
    }

    //safety
    if (result === 'safety') {
      points = 2
      team === 'home' ? team = 'away' : team = 'home'
      this.setState({ showAddDrive: true })
    }
    if (points > 0) {
      let addPoints = score[team][quarter]
      addPoints.push(points)
      let newPoints = { ...score }
      this.submitPlay(newPoints)
    }else {
      this.setState({ showAddPlay: true, playCount: this.playCount + 1 });
      this.submitPlay()
    }
  }

  submitPlay = async (scoreObj) => {
    const {
      gameId,
      driveId,
      playType,
      gainLoss,
      playDist,
      player1,
      player2,
      result,
      min,
      sec,
      quarter,
      kickType,
      playCount
    } = this.state
    let playObj = {
      playType,
        gainLoss,
        playDist,
        player1,
        player2,
        result,
        min,
        sec,
        quarter,
        kickType,
        playCount
    }
    this.setState({ game: {...this.state.game, score: scoreObj } }, () => {
      
      axios
        .put(`/api/game`, {
          driveId,
          gameId,
          playObj,
          scoreObj
          
        })
        .then(res => {
  
          if (this.state.result === 'touchdown') {
            this.setState({
              showAfterTD: true,
              showAddPlay: false
            })
          }
          this.setState(
            {
              playType: '',
              gainLoss: '',
              playDist: '',
              player1: '',
              player2: '',
              result: ''
            })
          this.props.updateGame(res.data.game)
        })
    })
  }

  showAfterTD = () => {
    this.setState({ showAfterTD: true })
  }

  render() {

    return (
      <Wrapper>
        {/* Add drive inputs */}
        {this.state.showAddDrive && (
          <div className='new-drive'>
            <select
              onChange={e => this.handleChange(e.target)}
              name='team'
              className='team-select'>
              <option>Select Team</option>
              <option value='home'>Home</option>
              <option value='away'>Away</option>
            </select>
            <select
              onChange={e => this.handleChange(e.target)}
              name='fieldSide'>
              <option>Field Side</option>
              <option value='home'>Home</option>
              <option value='away'>Away</option>
            </select>
            <input
              onChange={e => this.handleChange(e.target)}
              name='yardLine'
              placeholder='Yard Line'
              list='yard-line'
            />
            <datalist id='yard-line'>
              {[...Array(50)].map((el, i) => (
                <option key={i} value={`${i}`}>
                  Yards
                </option>
              ))}
            </datalist>
            <button onClick={() => this.submitDrive()}>Submit</button>
          </div>
        )}
        
        <AfterTDInputs admin={this.state} handleChange={this.handleChange} addScore={this.addScore}/>

        {this.state.showAddPlay && (
          <div>
            <select
              onChange={e => this.handleChange(e.target)}
              name='playType'
              placeholder='Play Type'
              value={this.state.playType}
              list='play-type'>
              <option>Play Type</option>
              <option value='run'>Run</option>
              <option value='pass'>Pass</option>
              <option value='sack'>Sack</option>
              <option value='incomplete pass'>Incomplete Pass</option>
              <option value='kick'>Kick</option>
            </select>

            {this.state.playType && (
              <PlayInputs
                handleChange={this.handleChange}
                adminState={this.state}
                addScore={this.addScore}
              />
            )}
          </div>
        )}
      </Wrapper>
    )
  }
}
