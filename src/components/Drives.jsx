import React from 'react'
import styled from 'styled-components'
import Drive from './Drive'

const Wrapper = styled.div`
border: 1px solid black;
border-radius: 7px;
margin-left: 25px;
height: 400px;
width: 475px;`

export default class Drives extends React.Component{
    state={

    }
    render(){
        const { drives } = this.props.game
        return(
            <Wrapper>
                <h1>Drives!</h1>

                {drives.length === 0 ? 'No drives yet' :
                <div className='drives'>
                    
                    {drives.map(drive => <Drive key={drive.index} drive={drive}/>)}


                </div>}


            </Wrapper>
        )
    }
} 