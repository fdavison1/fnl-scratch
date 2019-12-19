import React from 'react'
import styled from 'styled-components'
import { returnText } from '../functions/returnText'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: sans-serif;
h1 {
    font-weight: bold;
}`

export default class Play extends React.Component{
    state={

    }
    render(){
        const { play } = this.props
        return(
            <Wrapper>
             
            <h1>play {play.index}:</h1>
            <p>{returnText()}</p>

            

            </Wrapper>
        )
    }
} 