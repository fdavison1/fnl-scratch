import React from 'react'
import styled from 'styled-components'
import Jersey from '../components/Jersey'

const Wrapper = styled.div`
border: 1px solid black
border-radius: 7px;
height: 400px
width: 350px`

export default class GameLeaders extends React.Component{
    state={

    }
    render(){
        console.log(this.props.game.hColor)
        return(
           
            <Wrapper>
                <h1>GameLeaders!</h1>
              
                <Jersey color={this.props.game.hColor} number='21'/>
                <Jersey color={this.props.game.aColor} number='17'/>

            </Wrapper>
                 
        )
    }
} 