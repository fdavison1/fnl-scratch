import React from "react";
import styled from "styled-components";
import Helmet from "../components/Helmet";
import "../assets/digital-7.ttf"

const Wrapper = styled.div`

border: 1px solid black;
display: flex;
justify-content: space-evenly;
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
    display: flex;
  }
  .clock {
      
      height: 100px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      font-family: Digital-7;
      font-size: 3rem;
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
            </div>
            
            <div className="clock">
              <div className="numbers">
                <p className="hours"></p>
                <p class="placeholder">88</p>
              </div>
              <div class="colon">
                <p>:</p>
              </div>
              <div className="numbers">
                <p className="minutes"></p>
                <p class="placeholder">88</p>
              </div>
            </div>
          </div>
          <br />
          <div className="team">
            <div className="school-info">
              <h2>{aSchool}</h2>
              <h2>{aMascot}</h2>
            </div>
            <Helmet rightHelmet={true} color1={aColor} />
          </div>
        </div>
      </Wrapper>
    );
  }
}
