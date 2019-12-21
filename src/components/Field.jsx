import React from 'react'
import styled from 'styled-components'
import './Field.css'
import goal from '../assets/goal.png'

// const away = 'blue'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const Home = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: white;
  transform: rotate(-90deg);
`

const Away = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: white;
  transform: rotate(90deg);
`

const LeftZone = styled.div`
  display: flex;
  align-items: center;
  margin-top: 9px;
  width: 50px;
  height: 101px;
  transform: skew(331deg);
  background: ${props => props.color};
`

const RightZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 9px;
  width: 50px;
  height: 101px;
  transform: skew(29deg);
  background: ${props => props.color};
`

export default class Field extends React.Component {
  state = {}

  render() {
    return (
      <Wrapper>
        <div className='fieldDiv'>
          <img className='goal-post-left' src={goal} alt='' height='100' />

          <LeftZone color={this.props.game.home.color}>
            <Home>{this.props.game.home.school}</Home>
          </LeftZone>
          <div className='trapezoid'></div>
          <RightZone color={this.props.game.away.color}>
            <Away>{this.props.game.away.school}</Away>
          </RightZone>
          {/* <h3 className="team-1">Bears</h3> */}
          {/* <h3 className="team-2">Tigers</h3> */}

          <img className='goal-post-right' src={goal} alt='' height='100' />
        </div>
          {/* <div id="horizontal-list">
            <h4>10</h4>
            <h4>50</h4>
            <h4>10</h4>
          </div> */}
      </Wrapper>
    )
  }
}
