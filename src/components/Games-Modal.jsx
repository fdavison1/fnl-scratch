import React from 'react'
import axios from 'axios'
import Scoreboard from './Scoreboard'
import styled from 'styled-components'

const GameModal = styled.div`
position: fixed;
width: 650px;
background: lightgrey;
border-radius: 10px;
top: 50%;
left: 50%;
transform: translate(-312.5px, -300px)

`

export default class Modal extends React.Component{
    state = {
        games : []
    }

    componentDidMount(){
        this.getGames()
    }

    getGames(){
        let state = this.props.st
        axios.get(`/api/games/${state}`).then( res => {
            this.setState({
                games: res.data.data
            })
        })

   
    }

    render(){
        return(
            <GameModal>

                {this.state.games.length ? (this.state.games.map(game => {
                    return <Scoreboard key={game._id} game={game}/>
                })) : null}

            </GameModal>
        )
    }
}