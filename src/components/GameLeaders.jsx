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
.home, .away {
    font-family: sans-serif;
    color: #999999;
}
.home {
    margin-right: 50px;
}`

var dummyData = {
  home: {
    players: [
      {
        last_name: 'Rosetti',
        player_number: 54,
        position: 'QB',
        passYards: [0, 3, 20],
        rushYards: [0, 15],
        recYards: [0]
      },
      {
        last_name: 'Chaz',
        player_number: 1,
        position: 'RB',
        passYards: [0, 3],
        rushYards: [0, 15, 99],
        recYards: [0, 2]
      }
    ]
  },
  away: {
    players: [
      {
        last_name: 'Gater',
        player_number: 2,
        position: 'RB',
        passYards: [1,1],
        rushYards: [99, 900],
        recYards: [17, 20]
      },
      {
        last_name: 'Jeramiah',
        player_number: 3,
        position: 'WR',
        passYards: [10,1],
        rushYards: [1, 2, 3],
        recYards: [1, 2, 3, 50]
      }
    ]
  },
}

export default class GameLeaders extends React.Component{
    state={
      //HOME
      hPass: {},
      hRush: {},
      hRec: {},
      
      //AWAY
      aPass: {},
      aRush: {},
      aRec: {},
    }

    async findLeaders(){
      const  aPlayers = dummyData.away.players
      const hPlayers = dummyData.home.players

      //pass - away
      let aPassLeaders = []
      for (const key in aPlayers){
        let yards = aPlayers[key].passYards.reduce((acc, num) => {return acc + num})
        aPassLeaders.push({name: aPlayers[key].last_name, yards, number: aPlayers[key].player_number })
      }
      let aPassLeader = aPassLeaders.reduce((prev, current) => {return (prev.yards > current.yards) ? prev : current})
      //pass - home
      let hPassLeaders = []
      for (const key in hPlayers){
        let yards = hPlayers[key].passYards.reduce((acc, num) => {return acc + num})
        hPassLeaders.push({name: hPlayers[key].last_name, yards, number: hPlayers[key].player_number })
      }
      let hPassLeader = hPassLeaders.reduce((prev, current) => {return (prev.yards > current.yards) ? prev : current})
      //rush - away
      let aRushLeaders = []
      for (const key in aPlayers){
        let yards = aPlayers[key].rushYards.reduce((acc, num) => {return acc + num})
        aRushLeaders.push({name: aPlayers[key].last_name, yards, number: aPlayers[key].player_number })
      }
      let aRushLeader = aRushLeaders.reduce((prev, current) => {return (prev.yards > current.yards) ? prev : current})
      //rush - home
      let hRushLeaders = []
      for (const key in hPlayers){
        let yards = hPlayers[key].rushYards.reduce((acc, num) => {return acc + num})
        hRushLeaders.push({name: hPlayers[key].last_name, yards, number: hPlayers[key].player_number })
      }
      let hRushLeader = hRushLeaders.reduce((prev, current) => {return (prev.yards > current.yards) ? prev : current})
      //rec - away
      let aRecLeaders = []
      for (const key in aPlayers){
        let yards = aPlayers[key].recYards.reduce((acc, num) => {return acc + num})
        aRecLeaders.push({name: aPlayers[key].last_name, yards, number: aPlayers[key].player_number })
      }
      let aRecLeader = aRecLeaders.reduce((prev, current) => {return (prev.yards > current.yards) ? prev : current})
      //rec - home
      let hRecLeaders = []
      for (const key in hPlayers){
        let yards = hPlayers[key].recYards.reduce((acc, num) => {return acc + num})
        hRecLeaders.push({name: hPlayers[key].last_name, yards, number: hPlayers[key].player_number })
      }
      let hRecLeader = hRecLeaders.reduce((prev, current) => {return (prev.yards > current.yards) ? prev : current})

      //SET STATE
      await this.setState({
        aPass : aPassLeader, 
        hPass: hPassLeader,
        aRush: aRushLeader,
        hRush: hRushLeader,
        aRec: aRecLeader,
        hRec: hRecLeader
      })
      // console.log(hRecLeader)
      // console.log(this.state.aRush)
  }

  componentDidMount(){
    this.findLeaders()
  }

    render(){
      const { aPass, hPass, aRush, hRush, aRec, hRec } = this.state
        return (
          <Wrapper>

            {/* PASSING LEADERS */}
            <div className='section'>
              <Jersey color={this.props.game.home.color} number={hPass.number} school={this.props.game.home.school}/>
              <div className='stats'>
                <h1>Passing Leaders</h1>
                <div className='box'>
                  <div className='home'>
                    <p><span>{hPass.name}</span></p>
                    <p>{hPass.yards} yards</p>
                    <p>{this.props.game.home.school} #{hPass.number}</p>
                  </div>
                  <div className='away'>
                    <p>
                      <span>
                      {aPass.name}
                      </span>
                    </p>
                    <p>{aPass.yards} yards</p>
                    <p>{this.props.game.away.school} #{aPass.number}</p>
                  </div>
                </div>
              </div>
              <Jersey color={this.props.game.away.color} number={aPass.number} flip={true} school='HHS'/>
            </div>

            {/* RUSHING LEADERS */}
            <div className='section'>
              <Jersey color={this.props.game.home.color} number={hRush.number} school={this.props.game.home.school}/>
              <div className='stats'>
                <h1>Rushing Leaders</h1>
                <div className='box'>
                  <div className='home'>
                    <p>
                      <span>{hRush.name}</span>
                    </p>
                    <p>{hRush.yards} yards</p>
                    <p>{this.props.game.home.school} #{hRush.number}</p>
                  </div>
                  <div className='away'>
                    <p><span>
                      {aRush.name}
                    </span>
                      </p>
                    <p>{aRush.yards} yards</p>
                   <p>{this.props.game.away.school} #{aRush.number}</p>
                  </div>
                </div>
              </div>
              <Jersey
                color={this.props.game.away.color}
                number={aRush.number}
                flip={true}
                school='HHS'
              />
            </div>

            {/* RECEIVING LEADERS */}
            <div className='section'>
              <Jersey color={this.props.game.home.color} number={hRec.number} school={this.props.game.home.school}/>
              <div className='stats'>
                <h1>Receiving Leaders</h1>
                <div className='box'>
                  <div className='home'>
                    <p>
                      <span>{hRec.name}</span>
                    </p>
                    <p>{hRec.yards} yards</p>
                    <p>{this.props.game.home.school} #{hRec.number}</p>
                  </div>
                  <div className='away'>
                    <p><span>
                      {aRec.name}
                    </span>
                      </p>
                    <p>{aRec.yards} yards</p>
                   <p>{this.props.game.away.school} #{aRec.number}</p>
                  </div>
                </div>
              </div>
              <Jersey
                color={this.props.game.away.color}
                number={aRec.number}
                flip={true}
                school='HHS'
              />
            </div>
          </Wrapper>
        )
    }
} 