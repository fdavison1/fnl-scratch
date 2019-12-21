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
background: lightgray;
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
  /* border: 1px solid black; */
  background: white;
  border-radius: 5px;
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
}
.box-score {
  display: flex;
  /* border: 1px solid black; */
  /* border-radius: 5px; */
  padding: 3px 5px;
  margin-bottom: 3px;
  /* background: white; */
}
.quarter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px;
}
span {
  font-weight: 700;
}`




export default class Scoreboard extends React.Component {
  state = {
    min: '15',
    sec: '00',
    hScore: 0,
    aScore: 0,
    hs1: 0,
    hs2: 0,
    hs3: 0,
    hs4: 0,
    as1: 0,
    as2: 0,
    as3: 0,
    as4: 0

  };

  componentDidMount = () => {
    console.log(this.props)
    this.calculateScore()
  }


  calculateScore = () => {

    const {away, home } = this.props.game.gameObj.score

    //away quarters
    let newAS1 = away.first.reduce((acc, num) => {
       return acc + num
    })
    let newAS2 = away.second.reduce((acc, num) => {
      return acc + num
    })
    let newAS3 = away.third.reduce((acc, num) => {
      return acc + num
    })
    let newAS4 = away.fourth.reduce((acc, num) => {
      return acc + num
    })
    //home quarters
    let newHS1 = home.first.reduce((acc, num) => {
      return acc + num
    })
    let newHS2 = home.second.reduce((acc, num) => {
      return acc + num
    })
    let newHS3 = home.third.reduce((acc, num) => {
      return acc + num
    })
    let newHS4 = home.fourth.reduce((acc, num) => {
      return acc + num
    })
    //away score
    let newAScore = 0
    newAScore = newAS1 + newAS2 + newAS3 + newAS4

    //home score
    let newHScore = 0
    newHScore = newHS1 + newHS2 + newHS3 + newHS4


        this.setState({
          hScore: newHScore,
          aScore: newAScore,
          hs1: newHS1,
          hs2: newHS2,
          hs3: newHS3,
          hs4: newHS4,
          as1: newAS1,
          as2: newAS2,
          as3: newAS3,
          as4: newAS4
        })

  }

  render() {
    
    const {
      aColor,
      aSchool,
      aMascot,
      hColor,
      hSchool,
      hMascot,
    } = this.props.game;

    const {
      hScore,
      aScore,
      hs1,
      hs2,
      hs3,
      hs4,
      as1,
      as2,
      as3,
      as4 } = this.state

    return (
      <Wrapper>
        <div className="teams">
          <div className="team">
            <Helmet color1={hColor} />
            <div className="school-info">
              <h2>{hSchool}</h2>
              <h2>{hMascot}</h2>
              {!(this.props.game.status === 'upcoming') && <h3 className='score'>{hScore}</h3>}
            </div>
          </div>


          <div className='clockContainer'>
            {this.props.game.status === 'inProgress' && <>



              <h1 id='title'>Time Remaining:</h1>

              <div className='clock'>
                <div className="numbers">
                  <p className="hours"></p>
                  <p className="placeholder">{this.state.min}</p>
                </div>
                <div className="colon">
                  <p>:</p>
                </div>
                <div className="numbers">
                  <p className="minutes"></p>
                  <p className="placeholder">{this.state.sec}</p>
                </div>
              </div>
              <div className='box-score'>
                <div className='quarter'>
                  <p><span>Team</span></p>
                  <p>Home</p>
                  <p>Away</p>
                </div>

                <div className="quarter">
                  <p><span>1st</span></p>
                  <p>{hs1}</p>
                  <p>{as1}</p>
                </div>

                <div className="quarter">
                  <p><span>2nd</span></p>
                  <p>{hs2}</p>
                  <p>{as2}</p>
                </div>

                <div className="quarter">
                  <p><span>3rd</span></p>
                  <p>{hs3}</p>
                  <p>{as3}</p>
                </div>

                <div className="quarter">
                  <p><span>4th</span></p>
                  <p>{hs4}</p>
                  <p>{as4}</p>
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
              {!(this.props.game.status === 'upcoming') && <h3 className='score'>{aScore}</h3>}
            </div>
            <Helmet rightHelmet={true} color1={aColor} />
          </div>
        </div>
      </Wrapper>
    );
  }
}
