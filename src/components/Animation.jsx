import React from 'react'
import styled from 'styled-components'
import Line from './Line'

const Wrapper = styled.div`
border: solid orange;
z-index: 10;
height: 100%;
width: 625px;
margin: 0 auto;
margin-right: 25px;
display: flex;
align-items: center;
box-sizing: border-box;
display: flex;
.start {
}
/* .dot {
    height: 15px;
    width: 15px;
    min-width: 15px;
    border: solid 1px black;
    border-radius: 50px;
    background: black;
    box-sizing: border-box;
} */
.arrow-container {
    display: flex;
    align-items: center;
    margin-left: -5px;
}
.arrow {
    margin-left: -1px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 30px solid black;
    border-bottom: 10px solid transparent;
}
.arrow-line {
    height: 6px;
    background: black;
    min-width: 10px;
    margin-left: -1px;
}
`

export default class Animation extends React.Component {
    class = {
    }


    render() {
        console.log(this.props.game.drivesArr[5])
        return (
            <Wrapper>
                <div className='start' style={{marginLeft: `${(this.props.margins.start *6)-10}px`}}></div>


                {this.props.game.drivesArr[5].plays.map((line, i) => (
                    <Line key={i} line={line}/>
                ))}


                <div className="arrow-container">
                <div className="arrow-line"></div>
                <div className="arrow"></div>
                </div>



            </Wrapper>
        )
    }
}