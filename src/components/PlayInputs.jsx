import React from 'react'
import styled from 'styled-components'
import SubmitButton from './SubmitButton'


const Wrapper = styled.div``

export default class PlayInputs extends React.Component {
    state = {}

    render() {
        const admin = this.props.adminState
        return (
          <Wrapper>
            {/* RUN OR PASS*/}
            {(admin.playType === 'run' ||
              admin.playType === 'pass' ||
              admin.playType === 'sack' ||
              admin.playType === 'incomplete pass') && (
              <div className='run'>
                {!(admin.playType === 'incomplete pass') && (
                  <>
                    <select
                      onChange={e => this.props.handleChange(e.target)}
                      name='gainLoss'
                      value={admin.gainLoss}>
                      <option>Gain/Loss</option>

                      {!(admin.playType === 'sack') && (
                        <option value='gain'>Gain</option>
                      )}
                      <option value='loss'>Loss</option>
                    </select>

                    <input
                      onChange={e => this.props.handleChange(e.target)}
                      name='playDist'
                      value={admin.playDist}
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
                  </>
                )}

                <input
                  onChange={e => this.props.handleChange(e.target)}
                  name='player1'
                  placeholder={admin.playType === 'run' ? 'Runner' : 'Passer'}
                  list='player1'
                  value={admin.player1}
                />
                <datalist id='player1'>
                  {admin.team === 'home'
                    ? admin.game.home.players.map((player, i) => (
                        <option key={i} value={player.last_name}>
                          {player.position}
                        </option>
                      ))
                    : admin.game.away.players.map((player, i) => (
                        <option key={i} value={player.last_name}>
                          {player.position}
                        </option>
                      ))}
                </datalist>
                {(admin.playType === 'pass' ||
                  admin.playType === 'incomplete pass') && (
                  <>
                    <input
                      onChange={e => this.props.handleChange(e.target)}
                      name='player2'
                      placeholder={
                        admin.playType === 'pass'
                          ? 'Receiver'
                          : 'Intended Receiver'
                      }
                      list='player2'
                      value={admin.player2}
                    />
                    <datalist id='player2'>
                      {admin.playType === 'incomplete pass' && (
                        <option value='NA'>N/A</option>
                      )}
                      {admin.team === 'home'
                        ? admin.game.home.players.map((player, i) => (
                            <option key={i} value={player.last_name}>
                              {player.position}
                            </option>
                          ))
                        : admin.game.away.players.map((player, i) => (
                            <option key={i} value={player.last_name}>
                              {player.position}
                            </option>
                          ))}
                    </datalist>
                  </>
                )}
                <select
                  onChange={e => this.props.handleChange(e.target)}
                  name='result'
                  value={admin.result}>
                  <option>Play Result</option>
                  {!(admin.playType === 'sack') && (
                    <option value='1st'>1st Down</option>
                  )}
                  <option value='2nd'>2nd Down</option>
                  <option value='3rd'>3rd Down</option>
                  <option value='4th'>4th Down</option>
                  <option value='downs'>Turnover On Downs</option>
                  <option value='fumble'>Fumble</option>
                  <option value='safety'>Safety</option>
                  <option value='time expires'>Time Expires</option>
                  {!(admin.playType === 'sack') && (
                    <>
                      <option value='interception'>Interception</option>
                      <option value='touchdown'>Touchdown</option>
                    </>
                  )}
                </select>
                <input
                  placeholder='Minutes'
                  value={admin.min}
                  onChange={e => this.props.handleChange(e.target)}
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
                  onChange={e => this.props.handleChange(e.target)}
                  name='sec'
                  list='sec'
                  value={admin.sec}
                />
                <datalist id='sec'>
                  {[...Array(60)].map((el, i) => (
                    <option key={i} value={i}>
                      Seconds
                    </option>
                  ))}
                </datalist>
                <select
                  name='quarter'
                  onChange={e => this.props.handleChange(e.target)}
                  value={admin.quarter}>
                  <option>Select Quarter</option>
                  <option value='first'>1st</option>
                  <option value='second'>2nd</option>
                  <option value='third'>3rd</option>
                  <option value='fourth'>4th</option>
                </select>
              </div>
            )}

            {/* INCOMPLETE PASS */}

            {/* SACK */}

            {/* KICK */}
            {admin.playType === 'kick' && (
              <div className='run'>
                <select
                  onChange={e => this.props.handleChange(e.target)}
                  name='kickType'
                  value={admin.kickType}
                  placeholder='Kick Type'
                  list='kick-type'>
                  <option>Kick Type</option>
                  <option value='field goal attempt'>FG Attempt</option>
                  <option value='punt'>Punt</option>
                </select>

                {admin.kickType && (
                  <div className='fg-attempt'>
                    <input
                      onChange={e => this.props.handleChange(e.target)}
                      name='playDist'
                      value={admin.playDist}
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
                      onChange={e => this.props.handleChange(e.target)}
                      name='player1'
                      placeholder='Kicker'
                      list='player1'
                      value={admin.player1}
                    />
                    <datalist id='player1'>
                      {admin.team === 'home'
                        ? admin.game.home.players.map((player, i) => (
                            <option key={i} value={player.last_name}>
                              {player.position}
                            </option>
                          ))
                        : admin.game.away.players.map((player, i) => (
                            <option key={i} value={player.last_name}>
                              {player.position}
                            </option>
                          ))}
                    </datalist>

                    <select
                      onChange={e => this.props.handleChange(e.target)}
                      name='result'
                      value={admin.result}>
                      <option>Play Result</option>

                      <option value='Successful'>Field Goal (Made)</option>
                      <option value='Failed'>Field Goal (Missed) </option>
                      <option value='blocked'>Blocked </option>
                      <option value='punt'>Punt</option>
                      <option value='fumble'>Fumble</option>
                      <option value='interception'>Interception</option>
                      <option value='safety'>Safety</option>
                      <option value='Time expires'>Time Expires</option>
                    </select>
                  </div>
                )}
              </div>
            )}

            {/* BUTTONS */}

            {admin.result && (
              <>
                {(admin.result === '1st' ||
                  admin.result === '2nd' ||
                  admin.result === '3rd' ||
                  admin.result === '4th') && (
                  <SubmitButton
                    title='Submit Play'
                    addScore={this.props.addScore}
                  />
                )}

                {admin.result === 'touchdown' && (
                  <SubmitButton
                    title='Submit TD'
                    addScore={this.props.addScore}
                  />
                )}

                {!(
                  admin.result === '1st' ||
                  admin.result === '2nd' ||
                  admin.result === '3rd' ||
                  admin.result === '4th' ||
                  admin.result === 'touchdown'
                ) && (
                  <SubmitButton
                    title='End Drive'
                    addScore={this.props.addScore}
                  />
                )}
              </>
            )}
          </Wrapper>
        )
    }
}