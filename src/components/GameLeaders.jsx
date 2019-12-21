import React from 'react'
import styled from 'styled-components'
import Jersey from '../components/Jersey'

const Wrapper = styled.div`
border: 1px solid black;
border-radius: 7px;
height: 400px;
width: 350px;
padding: 15px;
box-sizing: border-box;
h1 {
    font-size: 1.25rem;
    font-family: sans-serif;
    font-weight: 600;
    border-bottom: 1px solid black;
    color: black;
}
span {
    font-weight: bold;
    font-size: 1.1rem;
}
.section {
    display: flex;
    justify-content: space-between;
}
.stats {
    margin: 0 -200%;
}
.box {
    display: flex;
}
.left, .right {
    font-family: sans-serif;
    color: #999999;
}
.left {
    margin-right: 50px;
}`

export default class GameLeaders extends React.Component{
    state={

    }
    render(){
        // console.log(this.props.game.hColor)
        return(
           
            <Wrapper>


                <div className="section">
                <Jersey color={this.props.game.hColor} number='21'/>
                <div className="stats">
                    <h1>Passing Leaders</h1>
                    <div className="box">
                        <div className="left">
                            <p>Name</p>
                            <p>Yards</p>
                            <p>School #</p>
                        </div>
                        <div className="right">
                            <p>Name</p>
                            <p>Yards</p>
                            <p>School #</p>
                        </div>
                    </div>

                </div>
                <Jersey color={this.props.game.aColor} number='17' flip={true}/></div>
                
                <div className="section">
                <Jersey color={this.props.game.hColor} number='21'/>
                <div className="stats">
                    <h1>Rushing Leaders</h1>
                    <div className="box">
                        <div className="left">
                            <p><span>Gater</span></p>
                            <p>999 Yards</p>
                            <p>LHS #7</p>
                        </div>
                        <div className="right">
                            <p>Name</p>
                            <p>Yards</p>
                            <p>School #</p>
                        </div>
                    </div>

                </div>
                <Jersey color={this.props.game.aColor} number='17' flip={true}/>
                </div>

                <div className="section">
                <Jersey color={this.props.game.hColor} number='21'/>
                <div className="stats">
                    <h1>Receiving Leaders</h1>
                    <div className="box">
                        <div className="left">
                            <p>Name</p>
                            <p>Yards</p>
                            <p>School #</p>
                        </div>
                        <div className="right">
                            <p>Name</p>
                            <p>Yards</p>
                            <p>School #</p>
                        </div>
                    </div>
                </div>
                <Jersey color={this.props.game.aColor} number='17' flip={true}/>
                </div>
            </Wrapper>
                 
        )
    }
} 