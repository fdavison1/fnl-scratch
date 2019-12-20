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
        console.log(this.props)
        
        const { drivesArr } = this.props.game
        return(
            <Wrapper>
                {drivesArr.length === 0 ? 'No drives yet' :
                <div className='drives'>   
                    {drivesArr.map(drive => <Drive teamObj={this.props.game[drive.team]} key={drive.driveCount} drive={drive}/>)}
                </div>}
            </Wrapper>
        )
    }
} 