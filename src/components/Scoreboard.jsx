import React from 'react'
import styled from 'styled-components'
import Helmet from './Helmet'
import Field from './Field'

const Wrapper = styled.div`
  width: 600px;
  margin: 25px;
  background: white;
  border-radius: 7px;
  box-sizing: border-box;
  .school-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .team, .teams{
    display: flex;
    justify-content: space-evenly;
  }
  .field-component {
    display: flex
  }
`

export default class Scoreboard extends React.Component {
  state = {}

  render() {
    const h = this.props.game.home
    const a = this.props.game.away
    return (
      <Wrapper>
          <div className='teams'>
        <div className='team'>
          <Helmet color1={h.color} />
          <div className='school-info'>
            <h2>Home School: {h.school}</h2>
            <h2>Mascot: {h.mascot}</h2>
          </div>
        </div>
        <br />
        <div className='team'>
          <div className='school-info'>
            <h2>Away School: {a.school}</h2>
            <h2>Mascot: {a.mascot}</h2>
          </div>
          <Helmet rightHelmet={true} color1={a.color} />
        </div>
        </div>

        <div className='field-component'>
        <Field game={this.props.game}/>
        </div>

      </Wrapper>
    )
  }
}
