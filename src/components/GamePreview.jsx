import React from 'react'
import styled from 'styled-components'
import Helmet from './Helmet'
import { Link } from 'react-router-dom'

const Link2 = styled(Link)`
text-decoration: none;
color: black`

const Wrapper = styled.div`
  width: 600px;
  margin: 25px;
  background: white;
  border-radius: 7px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  .school-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .team, .teams{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.2rem;
  }
  .field-component {
    display: flex;
  }
  .at {
    font-size: 2rem;
  }
`

export default class GamePreview extends React.Component {
  state = {}



  render() {
    const h = this.props.game.home
    const a = this.props.game.away
    return (
      <Link2 to={`/game/${this.props.game._id}`}>
        <Wrapper >
          <div className='teams'>
            <div className='team'>
              <Helmet color1={h.color} />
              <div className='school-info'>
                <h2>{h.school}</h2>
                <h2>{h.mascot}</h2>
              </div>
            </div>
            <div className='at'>{this.props.game.start_time}</div>
            <div className='team'>
              <div className='school-info'>
                <h2>@ {a.school}</h2>
                <h2>{a.mascot}</h2>
              </div>
              <Helmet rightHelmet={true} color1={a.color} />
            </div>
          </div>

          {/* <div className='field-component'>
        <Field game={this.props.game}/>
        </div> */}
        </Wrapper>
      </Link2>
    )
  }
}
