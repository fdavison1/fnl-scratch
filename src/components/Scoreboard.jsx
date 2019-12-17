import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
border: solid 1px #999999
width: 1000px
margin: 25px
box-sizing: border-box`

export default class Scoreboard extends React.Component{
    state = {}

    render(){
        const h= this.props.game.home
        const a = this.props.game.away
        return (
            <Wrapper>

                Home
                School: {h.school}
                Mascot: {h.mascot}
                Color: {h.color}
                <br/>
                Away
                School: {a.school}
                Mascot: {a.mascot}
                Color: {a.color}
            </Wrapper>
        )
    }
}