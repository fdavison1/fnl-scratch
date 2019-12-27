import React from 'react'
import styled from 'styled-components'
import Animation from './Animation'
import './Field.css'
import goal from '../assets/goal.png'


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  .fieldContainer {
  position: relative;
  top: 0;
  }

  .animation {
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
  state = {
    start: 0,
    //selectedDrive logic...
    selectedDrive: 5
  }

  componentDidMount(){
    this.setState({
      start: this.props.game.drivesArr[this.state.selectedDrive].yardLine
    })
  }

  render() {
    // console.log(this.props)
    // console.log(this.props.game)
    return (
      <Wrapper>


        <div className='fieldContainer'>
        <div className='animation'>
        <Animation margins={this.state} game={this.props.game}/>
        </div>

        <div className='fieldDiv'>
          <img className='goal-post-left' src={goal} alt='' height='100' />

          <LeftZone color={this.props.game.home.color}>
            <Home>{this.props.game.home.school}</Home>
          </LeftZone>
          <div className='trapezoid'></div>
          <RightZone color={this.props.game.away.color}>
            <Away>{this.props.game.away.school}</Away>
          </RightZone>
        

          <img className='goal-post-right' src={goal} alt='' height='100' />
        </div>
        
        </div>
          
      </Wrapper>
    )
  }
}
