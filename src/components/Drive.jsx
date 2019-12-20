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
        showPlays: false,
    }

showPlays(){
    this.setState({
        showPlays: !this.state.showPlays
    })
}

    render(){
      console.log(this.props)
      
        const { drive } = this.props
        return (
          <Wrapper>
            <h1 onClick={() => this.showPlays()} className='drives'>
              Drive {drive.driveCount}: {this.props.teamObj.school} {this.props.teamObj.mascot}
            </h1>
            {this.state.showPlays && (
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
