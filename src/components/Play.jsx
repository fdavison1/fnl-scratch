import React from 'react'
import styled from 'styled-components'
import { returnText } from '../functions/returnText'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: sans-serif;
background: yellow;
h1 {
    font-weight: bold;
}
h2 {
    font-weight: bold;
}`

export default class Play extends React.Component{
    state={

    }
    render(){
        const { play } = this.props
        return(
            <Wrapper>
            <h2>play {play.playCount}:</h2>
            {returnText(play)}
            </Wrapper>
        )
    }
} 