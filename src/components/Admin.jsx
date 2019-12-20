import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.div`
  margin: 15px auto;
  border: 1px solid black;
  height: 100px;
  width: 850px;
`

export default class Admin extends React.Component {
  state = {
    game: {},
    gameId: '',
    home: [],
    away: [],
    
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
    quarter: '',
    
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
      gameId: this.props.game._id,
      home: this.props.hPlayers,
      away: this.props.aPlayers
    })
  }

  handleChange = trg => {
    this.setState({ [trg.name]: trg.value })
    if (trg.value === 'touchdown') {
      this.setState({ showAfterTD: true })
    }
  }

  submitDrive = () => {
    const { gameId, driveCount, team, fieldSide, yardLine } = this.state
    axios
      .put('/api/game/drive', {
        id: gameId,
        drive: { driveCount, team, fieldSide, yardLine, plays: [] }
      })
      .then(res => {
        this.setState({
          driveCount: driveCount + 1,
          showAddDrive: false,
          showAddPlay: true,
          game: res.data
        })
      })
      .catch(err => console.log(err))
  }

  submitPlay = () => {
    const {
      gameId,
      playType,
      gainLoss,
      playDist,
      player1,
      player2,
      result,
      min,
      sec,
      quarter
    } = this.state
    axios.put(`/api/game/${this.state.gameId}`, {
      gameId,
      playType,
      gainLoss,
      playDist,
      player1,
      player2,
      result,
      min,
      sec,
      quarter
    })
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
        {/* Add play inputs */}
        {this.state.showAddPlay && (
          <div className='add-play'>
            <select
              onChange={e => this.handleChange(e.target)}
              name='playType'
              placeholder='Play Type'
              list='play-type'>
              <option>Play Type</option>
              <option value='run'>Run</option>
              <option value='pass'>Pass</option>
              <option value='sack'>Sack</option>
              <option value='incompletePass'>Incomplete Pass</option>
              <option value='kick'>Kick</option>
            </select>
            <select onChange={e => this.handleChange(e.target)} name='gainLoss'>
              <option>Gain/Loss</option>
              <option value='gain'>Gain</option>
              <option value='loss'>Loss</option>
            </select>
            <input
              onChange={e => this.handleChange(e.target)}
              name='playDist'
              placeholder='Play Distance'
              list='play-distance'
            />
            <datalist id='play-distance'>
              {[...Array(100)].map((el, i) => (
                <option value={i} key={i}>
                  Yards
                </option>
              ))}
            </datalist>
            <input
              onChange={e => this.handleChange(e.target)}
              name='player1'
              placeholder={this.state.playType === 'pass' ? 'Passer' : 'Runner'}
              list='player1'
            />
            <datalist id='player1'>
              {this.state.team === 'home'
                ? this.state.home.map(player => (
                    <option value={player.last_name}>{player.position}</option>
                  ))
                : this.state.away.map(player => (
                    <option value={player.last_name}>{player.position}</option>
                  ))}
            </datalist>
            {this.state.playType === 'pass' && (
              <>
                <input
                  onChange={e => this.handleChange(e.target)}
                  name='player2'
                  placeholder='Receiver'
                  list='player2'
                />
                <datalist id='player2'>
                  {this.state.team === 'home'
                    ? this.state.home.map((player, i) => (
                        <option key={i} value={player.last_name}>
                          {player.position}
                        </option>
                      ))
                    : this.state.away.map((player, i) => (
                        <option key={i} value={player.last_name}>
                          {player.position}
                        </option>
                      ))}
                </datalist>
              </>
            )}
            <select onChange={e => this.handleChange(e.target)} name='result'>
              <option value='1st'>1st Down</option>
              <option value='2nd'>2nd Down</option>
              <option value='3rd'>3rd Down</option>
              <option value='4th'>4th Down</option>
              <option value='punt'>Punt</option>
              <option value='downs'>Turnover On Downs</option>
              <option value='fumble'>Fumble</option>
              <option value='interception'>Interception</option>
              <option value='safety'>Safety</option>
              <option value='touchdown'>Touchdown</option>
              <option value='fieldGoal'>Field Goal</option>
              <option value='missedFG'>Field Goal (Missed) </option>
              <option value='endHalf'>End Of Half</option>
              <option value='endGame'>End Of Game</option>
            </select>
            <input
              placeholder='Minutes'
              onChange={e => this.handleChange(e.target)}
              name='min'
              list='min'
            />
            <datalist id='min'>
              {[...Array(15)].map((el, i) => (
                <option key={i} value={i}>
                  Minutes
                </option>
              ))}
            </datalist>
            <input
              placeholder='Seconds'
              onChange={e => this.handleChange(e.target)}
              name='sec'
              list='sec'
            />
            <datalist id='sec'>
              {[...Array(60)].map((el, i) => (
                <option key={i} value={i}>
                  Seconds
                </option>
              ))}
            </datalist>
            <select name='quarter' onChange={e => this.handleChange(e.target)}>
              <option>Select Quarter</option>
              <option value='1st'>1st</option>
              <option value='2nd'>2nd</option>
              <option value='3rd'>3rd</option>
              <option value='4th'>4th</option>
            </select>
            <button>Submit</button>
          </div>
        )}
        {/* After TD play inputs */}
        {this.state.showAfterTD && (
          <div>
            <select onChange={e => this.handleChange(e.target)} name='afterTD'>
              <option>PAT/2Pt</option>
              <option value='pat'>PAT Attempt</option>
              <option value='2pt'>2-Pt Conversion</option>
            </select>
            {this.state.afterTD === 'pat' ? (
              <>
                <input
                  onChange={e => this.handleChange(e.target)}
                  name='kicker'
                  placeholder='Kicker'
                  list='kicker'
                />
                <datalist id='kicker'>
                  {this.state.team === 'home'
                    ? this.state.home.map((player, i) => (
                        <option key={i} value={player.last_name}>
                          {player.position}
                        </option>
                      ))
                    : this.state.away.map((player, i) => (
                        <option key={i} value={player.last_name}>
                          {player.position}
                        </option>
                      ))}
                </datalist>
                <select
                  onChange={e => this.handleChange(e.target)}
                  name='patRes'>
                  <option>PAT Result</option>
                  <option value='good'>Good</option>
                  <option value='missed'>Missed</option>
                  <option value='blocked'>Blocked</option>
                </select>
                {this.state.patRes === 'blocked' && (
                  <>
                    <input
                      onChange={e => this.handleChange(e.target)}
                      name='patBlocker'
                      placeholder='Blocked By'
                      list='patBlocker'
                    />
                    <datalist id='patBlocker'>
                      {this.state.team === 'away'
                        ? this.state.home.map((player, i) => (
                            <option key={i} value={player.last_name}>
                              {player.position}
                            </option>
                          ))
                        : this.state.away.map((player, i) => (
                            <option key={i} value={player.last_name}>
                              {player.position}
                            </option>
                          ))}
                    </datalist>
                    <button>Submit</button>
                  </>
                )}
              </>
            ) : (
              // 2 point conversion play section
              this.state.afterTD === '2pt' && (
                <div className='2pt-play'>
                  <select
                    onChange={e => this.handleChange(e.target)}
                    name='playType'
                    placeholder='Play Type'
                    list='play-type'>
                    <option>Play Type</option>
                    <option value='run'>Run</option>
                    <option value='pass'>Pass</option>
                    <option value='sack'>Sack</option>
                    <option value='incompletePass'>Incomplete Pass</option>
                    <option value='kick'>Kick</option>
                  </select>
                  <input
                    onChange={e => this.handleChange(e.target)}
                    name='player1'
                    placeholder={
                      this.state.playType === 'pass' ? 'Passer' : 'Runner'
                    }
                    list='player1'
                  />
                  <datalist id='player1'>
                    {this.state.team === 'home'
                      ? this.state.home.map((player, i) => (
                          <option key={i} value={player.last_name}>
                            {player.position}
                          </option>
                        ))
                      : this.state.away.map((player, i) => (
                          <option key={i} value={player.last_name}>
                            {player.position}
                          </option>
                        ))}
                  </datalist>
                  {this.state.playType === 'pass' && (
                    <>
                      <input
                        onChange={e => this.handleChange(e.target)}
                        name='player2'
                        placeholder='Receiver'
                        list='player2'
                      />
                      <datalist id='player2'>
                        {this.state.team === 'home'
                          ? this.state.home.map((player, i) => (
                              <option key={i} value={player.last_name}>
                                {player.position}
                              </option>
                            ))
                          : this.state.away.map((player, i) => (
                              <option key={i} value={player.last_name}>
                                {player.position}
                              </option>
                            ))}
                      </datalist>
                    </>
                  )}
                  <select>
                    <option>2pt Result</option>
                    <option value='good'>Good</option>
                    <option value='failed'>Failed</option>
                  </select>
                  <button>Submit</button>
                </div>
              )
            )}
          </div>
        )}
      </Wrapper>
    )
  }
}
