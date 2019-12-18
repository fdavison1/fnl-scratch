import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
margin: 15px auto
border: 1px solid black
height: 100px
width: 850px`

export default class Admin extends React.Component{
    state={

    }
    render(){
        return(
            <Wrapper>
                <h1>Admin!</h1>
            </Wrapper>
        )
    }
} 