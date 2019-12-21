import React from 'react'
import styled from 'styled-components'
import SubmitButton from './SubmitButton'

const Wrapper = styled.div``

export default class AfterTDInputs extends React.Component{
    state ={}

    render(){
        const { admin } = this.props
        return(
            <Wrapper>

{/* After TD play inputs */}
{admin.showAfterTD && (

<select onChange={e => this.props.handleChange(e.target)} name='afterTD'>
  <option>PAT/2Pt</option>
  <option value='pat'>PAT Attempt</option>
  <option value='2pt'>2-Pt Conversion</option>
</select>
)}



{admin.afterTD === 'pat' ? (
  <>
    <input
      onChange={e => this.props.handleChange(e.target)}
      name='kicker'
      placeholder='Kicker'
      list='kicker'
    />
    <datalist id='kicker'>
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
      name='result'>
      <option>PAT Result</option>
      <option value='extra point'>Good</option>
      <option value='missed'>Missed</option>
      <option value='blocked'>Blocked</option>
    </select>
    {admin.patRes === 'blocked' && (
      <>
        <input
          onChange={e => this.props.handleChange(e.target)}
          name='patBlocker'
          placeholder='Blocked By'
          list='patBlocker'
        />
        <datalist id='patBlocker'>
          {admin.team === 'away'
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
        <button>Submit</button>
      </>
    )}
  </>
) : (
    // 2 point conversion play section
    admin.afterTD === '2pt' && (
      <div className='2pt-play'>
        <select
          onChange={e => this.props.handleChange(e.target)}
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
          onChange={e => this.props.handleChange(e.target)}
          name='player1'
          placeholder={
            admin.playType === 'pass' ? 'Passer' : 'Runner'
          }
          list='player1'
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
        {admin.playType === 'pass' && (
          <>
            <input
              onChange={e => this.props.handleChange(e.target)}
              name='player2'
              placeholder='Receiver'
              list='player2'
            />
            <datalist id='player2'>
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
        <select name='result' onChange={e => this.props.handleChange(e.target)}>
          <option>2pt Result</option>
          <option value='2 point'>Good</option>
          <option value='failed'>Failed</option>
        </select>
        <button>Submit</button>
      </div>
    )
  )}
        {admin.afterTD && <SubmitButton title='End Drive' addScore={this.props.addScore}/>}

            </Wrapper>
        )
    }
}