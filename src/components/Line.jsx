import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
/* border: solid orange; */
display: flex;
align-items: center;
.dot {
    height: 15px;
    width: 15px;
    min-width: 15px;
    border: solid 1px black;
    border-radius: 50px;
    background: black;
    box-sizing: border-box;
}
.run {
    /* width: 45px; */
    height: 5px;
    background: black;
    /* border: 1px solid black; */
    margin-left: -1px;
}
.pass {
    /* width: 45px; */
    height: 5px;
    border: 5px solid black;
    /* margin: 0 -10px; */
    margin-left: -10px;
    margin-bottom: 72px;
    border-radius: 50%/100px 100px 0 0;
    height: 75px;
    border-color: black transparent transparent transparent;
}
.none, .other {
    display: none;
}`

const Line = props => {
    console.log(props)
    return (
        <Wrapper>
            <div className={props.line.playType ? 'dot': 'none'} ></div>
            <div className={props.line.playType === 'run' ? 'run' : props.line.playType === 'pass' ? 'pass' : 'other'} style={{width: `${(props.line.playDist *6)-15}px`}}></div>
        </Wrapper>
    )
}

export default Line