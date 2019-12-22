import React from 'react'
import styled from 'styled-components'
import Drive from './Drive'

const Wrapper = styled.div`
box-sizing: border-box;
border: 1px solid black;
padding: 15px;
border-radius: 7px;
margin-left: 25px;
height: 400px;
width: 475px;
overflow: scroll;`

export default class Drives extends React.Component{
    state={

    }
    render(){
        
        const { drivesArr } = this.props.game
        return(
            <Wrapper>
                {drivesArr.length === 0 ? 'No drives yet' :
                <div className='drives'>   
                    {drivesArr.map(drive => <Drive selectedDrive={this.props.selectedDrive} setCurrentDrive={this.props.setCurrentDrive} teamObj={this.props.game[drive.team]} key={drive.driveCount} drive={drive}/>)}
                </div>}
            </Wrapper>
        )
    }
} 