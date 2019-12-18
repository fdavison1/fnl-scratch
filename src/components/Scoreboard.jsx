import React from 'react'
import styled from 'styled-components'
import Helmet from '../components/Helmet'

const Wrapper = styled.div`
border: 1px solid black;
display: flex
justify-content: space-evenly
  width: 700px;
  margin: 25px auto;
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
  .clock {
      border: 1px solid black
      height: 100px
      width: 200px
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
  }`

export default class Scoreboard extends React.Component{
    state = {

    }
    render(){
    const { aColor, aSchool, aMascot, hColor, hSchool, hMascot } = this.props.game
        return(
            <Wrapper
            >
            <div className='teams'>
             
             
              <div className='team'>
                <Helmet color1={hColor} />
                <div className='school-info'>
                  <h2>{hSchool}</h2>
                  <h2>{hMascot}</h2>
                </div>
            
            <div className='clock'>
                <p>15:00</p>
                <p>1st Quarter</p>
            </div>

              </div>
              <br />
              <div className='team'>
                <div className='school-info'>
                  <h2>{aSchool}</h2>
                  <h2>{aMascot}</h2>
                </div>
                <Helmet rightHelmet={true} color1={aColor} />
              </div>
              </div>
      
            </Wrapper>
        )
    }
}