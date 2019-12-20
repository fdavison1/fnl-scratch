import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

export default class PlayInputs extends React.Component {
    state = {}

    render() {
        return (
            <Wrapper>
                {/* RUN OR PASS*/}
                {this.props.playType === 'run' && (
                    <div className='run'>

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
                        <button onClick={() => this.submitPlay()} >Submit</button>
                    </div>
                )}

                {/* INCOMPLETE PASS */}

                {/* SACK */}

                {/* KICK */}
                {this.props.playType === 'kick' && (
                    <div className='run'>

                <select
                    onChange={e => this.handleChange(e.target)}
                    name='kickType'
                    placeholder='Kick Type'
                    list='kick-type'>
                    <option>Kick Type</option>
                    <option value='FGattempt'>FG attempt</option>
                    <option value='punt'>Punt</option>
                </select>


                </div>
                )}


            <button>submit play</button>
            {/* submitPlay */}

            <button>submit TD</button> 
            {/* add 6 points to score */}
            {/* submitPlay */}
            {/* toggle to afterTD */}

            {/* afterTD submit?? */}
        
            <button>end drive</button>
            {/* submit */}
            {/* add points, if any, to score */}
            {/* toggle to showAddDrive */}

            </Wrapper>
        )
    }
}