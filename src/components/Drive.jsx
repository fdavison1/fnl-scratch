import React from 'react'
import styled from 'styled-components'
import Play from './Play'

const Wrapper = styled.div`
.drives {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: sans-serif;
    &:hover {
        cursor: pointer;
    }
}`

export default class Drive extends React.Component{
    state={
    }

showPlays(){
    this.setState({
        showPlays: !this.state.showPlays
    })
}

    render(){
      
        const { drive } = this.props
        return (
          <Wrapper>
            <h1 onClick={() => this.props.setCurrentDrive(drive.driveCount)} className='drives'>
              Drive {drive.driveCount}: {this.props.teamObj.school} {this.props.teamObj.mascot}
            </h1>
            {(this.props.selectedDrive === drive.driveCount) && (
              <div className='plays'>
                {drive.plays.map(play => (
                  <Play key={play.index} play={play} />
                ))}
              </div>
            )}
          </Wrapper>
        )
    }
} 
