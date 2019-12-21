import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Field from './Field'
import Scoreboard from './Scoreboard'
import Drives from './Drives'
import GameLeaders from './GameLeaders'
import Admin from './Admin'

const Wrapper = styled.div`
background: white;
padding-top: 25px;
padding-bottom: 150px;
.container {
    display: flex;
    justify-content: center;
}`

export default class Game extends React.Component {
  state = {
    isLoading: true,
    gameObj: {},
    gameId: '',
    aColor: '',
    aSchool: '',
    aMascot: '',
    aPlayers: [],
    hColor: '',
    hSchool: '',
    hMascot: '',
    hPlayers: [],
    score: {
      home: {
        first: [0],
        second: [0],
        third: [0],
        fourth: [0]  
      },
      away: {
        first: [0],
        second: [0],
        third: [0],
        fourth: [0]  
      }    
    },

    selectedDrive: 0,
  }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`/api/game/${id}`).then(res => {
            
            let a = res.data.data.away 
            let h = res.data.data.home
            const { status, start_time } = res.data.data
            this.setState({
              gameObj: res.data.data,
              gameId: id,
              aColor: a.color,
              aSchool: a.school,
              aMascot: a.mascot,
              aPlayers: a.players,
              hColor: h.color,
              hSchool: h.school,
              hMascot: h.mascot,
              hPlayers: h.players,
              status: status,
              start_time: start_time,
              isLoading: false
            })
            console.log(this.state.gameObj)
        })
  }
  getGame() {
    let id = this.props.match.params.id
    axios.get(`/api/game/${id}`).then(res => {
      let a = res.data.data.away
      let h = res.data.data.home
      this.setState({
        aColor: a.color,
        aSchool: a.school,
        aMascot: a.mascot,
        hColor: h.color,
        hSchool: h.school,
        hMascot: h.mascot
      })
    })
  }
  updateGame = (game) => {
      this.setState({ gameObj: game });
  }

  setCurrentDrive = id => {
    this.setState({
        selectedDrive: id
    })
  }

  render() {
   
    
    return (
      <Wrapper>
        {this.state.isLoading && <h1>Loading...</h1>}
        {!this.state.isLoading && <Scoreboard game={this.state} />}
        {!this.state.isLoading && <Field game={this.state} />}
        {!this.state.isLoading && (
          <Admin
          updateGame={this.updateGame}
            game={this.state.gameObj}
            hPlayers={this.state.hPlayers}
            aPlayers={this.state.aPlayers}
            score={this.state.score}
          />
        )}
        {!this.state.isLoading && (
          <div className='container'>
            <GameLeaders game={this.state} />
            <Drives setCurrentDrive={this.setCurrentDrive} selectedDrive={this.state.selectedDrive} game={this.state.gameObj} />
          </div>
        )}
      </Wrapper>
    )
  }
}
