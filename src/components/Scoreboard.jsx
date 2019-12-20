import React from "react";
import styled from "styled-components";
import Helmet from "../components/Helmet";
import "../assets/digital-7.ttf"

const Wrapper = styled.div`
border: 1px solid black;
display: flex;
width: 700px;
margin: 25px auto;
border-radius: 7px;
box-sizing: border-box;
.school-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.team {
  display: flex;
}
.teams {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.field-component {
  display: flex;
}
.clock {
  display: flex;
  align-items: center;
  font-family: Digital-7;
  font-size: 3rem;
  justify-content: center;
}
.clockContainer {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
}
#title {
  font-family: sans-serif;
  font-size: 1rem;
}
.score {
  font-size: 4rem;
  font-family: Digital-7;
}`
  
  
  

export default class Scoreboard extends React.Component {
  state = {};
  render() {
    const {
      aColor,
      aSchool,
      aMascot,
      hColor,
      hSchool,
      hMascot
    } = this.props.game;
    return (
      <Wrapper>
        <div className="teams">
          <div className="team">
            <Helmet color1={hColor} />
            <div className="school-info">
              <h2>{hSchool}</h2>
              <h2>{hMascot}</h2>
              {!(this.props.game.status === 'upcoming') && <h3 className='score'>0</h3>}
            </div>
            </div>
            

          <div className='clockContainer'>
          {this.props.game.status === 'inProgress' && <>

            <h1 id='title'>Time Remaining:</h1>

            <div className='clock'>
            <div className="numbers">
              <p className="hours"></p>
              <p className="placeholder">88</p>
            </div>
            <div className="colon">
              <p>:</p>
            </div>
            <div className="numbers">
              <p className="minutes"></p>
              <p className="placeholder">88</p>
            </div>
            </div>
                      </>}

            {this.props.game.status === 'upcoming' && 
            <div>
            
            <h1 id='title'>Kickoff at:</h1>
            <h1 className='clock'>{this.props.game.start_time}</h1>
            </div>
            
            
          }

            {this.props.game.status === 'final' && <h1>FINAL</h1>}
            
            

         
          


          </div>
          <br />
          <div className="team">
            <div className="school-info">
              <h2>{aSchool}</h2>
              <h2>{aMascot}</h2>
              {!(this.props.game.status === 'upcoming') && <h3 className='score'>0</h3>}
            </div>
            <Helmet rightHelmet={true} color1={aColor} />
          </div>
        </div>
      </Wrapper>
    );
  }
}
