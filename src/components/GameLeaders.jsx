import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
border: 1px solid black
height: 300px
width: 350px`

export default class GameLeaders extends React.Component{
    state={

    }
    render(){
        return(
            <Wrapper>
                <h1>GameLeaders!</h1>
            </Wrapper>
        )
    }
} 