import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Field from './Field'
import Scoreboard from './Scoreboard'
import Drives from './Drives'
import GameLeaders from './GameLeaders'
import Admin from './Admin'

const Container = styled.div`
display: flex
justify-content: center`

export default class Game extends React.Component{
    state = {
        isLoading: true,
        aColor: '',
        aSchool: '',
        aMascot: '',
        hColor: '',
        hSchool: '',
        hMascot: ''
    }

    componentDidMount(){
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
                hMascot: h.mascot,
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
        console.log(this.props.match.params.id)
        return(
            <div>

            {this.state.isLoading && <h1>Loading...</h1>}

            {!this.state.isLoading && <Scoreboard game={this.state}/>}

            {!this.state.isLoading && <Field game={this.state}/>}

            {!this.state.isLoading && <Admin />}

            {!this.state.isLoading && (
                <Container>

                <GameLeaders game={this.state}/>
                <Drives />

                </Container>
            )}

            </div>
        )
    }
}