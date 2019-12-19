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


export default class Game extends React.Component{
    state = {
        isLoading: true,
        aColor: '',
        aSchool: '',
        aMascot: '',
        aPlayers: [],
        hColor: '',
        hSchool: '',
        hMascot: '',
        hPlayers: [],
        drives: [
            {
                index: 1,  
                plays:[{index: 1}, {index: 2}, {index: 3}, {index: 4}]
            },
            {
                index: 2,
                plays: [{index: 1}]},
        ]
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`/api/game/${id}`).then(res => {
            let a = res.data.data.away 
            let h = res.data.data.home
            const { status, start_time, drives } = res.data.data
            this.setState({
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
                // drives: drives,
                isLoading: false
            })
        })
    }

    getGame(){
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

    render(){
        return(
            <Wrapper>

            {this.state.isLoading && <h1>Loading...</h1>}

            {!this.state.isLoading && <Scoreboard game={this.state}/>}

            {!this.state.isLoading && <Field game={this.state}/>}

            {!this.state.isLoading && <Admin hPlayers={this.state.hPlayers} aPlayers={this.state.aPlayers} />}

            {!this.state.isLoading && (
                <div className='container'>

                <GameLeaders game={this.state}/>
                <Drives game={this.state}/>



                </div>
            )}

            </Wrapper>
        )
    }
}