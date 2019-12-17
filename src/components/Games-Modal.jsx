import React from 'react'
import axios from 'axios'
import Scoreboard from './Scoreboard'

export default class Modal extends React.Component{
    state = {
        games : []
    }

    componentDidMount(){
        this.getGames()
    }

    getGames(state){
        axios.get(`/api/games/UT`).then( res => {
            this.setState({
                games: res.data.data
            })
        })

   
    }

    render(){
        return(
            <div>

                <h1>Map</h1>

                {this.state.games.length ? (this.state.games.map(game => {
                    return <Scoreboard key={game._id} game={game}/>
                })) : null}

            </div>
        )
    }
}