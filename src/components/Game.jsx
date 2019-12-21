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
    selectedDrive: 0
  }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`/api/game/${id}`).then(res => {
            this.setState({
              gameObj: res.data.data,
              gameId: id,
              isLoading: false
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
        {!(this.state.isLoading) && <Scoreboard game={this.state.gameObj} />}
        {!(this.state.isLoading) && <Field game={this.state.gameObj} />}
        {!(this.state.isLoading) && (
          <Admin
          updateGame={this.updateGame}
            game={this.state.gameObj}
          />
        )}
        {!this.state.isLoading && (
          <div className='container'>
            <GameLeaders game={this.state.gameObj} />
            <Drives setCurrentDrive={this.setCurrentDrive} selectedDrive={this.state.selectedDrive} game={this.state.gameObj} />
          </div>
        )}
      </Wrapper>
    )
  }
}
