import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
margin-left: 150px
border: 1px solid black
height: 300px
width: 350px`

export default class Drives extends React.Component{
    state={

    }
    render(){
        return(
            <Wrapper>
                <h1>Drives!</h1>
            </Wrapper>
        )
    }
} 