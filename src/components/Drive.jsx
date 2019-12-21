import React from 'react'
import styled from 'styled-components'
import Play from './Play'

const Wrapper = styled.div`
h1 {
  color: ${'#999999'};
  &:hover {
    color: black;
  }
}
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
                {drive.plays.map((play, i) => (
                  <Play key={i} play={play} />
                ))}
              </div>
            )}
          </Wrapper>
        )
    }
} 
