import React from "react";
import axios from "axios";

import Scoreboard from "./GamePreview";

import styled from "styled-components";

const ModalBackdrop = styled.div`
   background:  rgba(000, 000, 000, 0.80);
   position: fixed;
   top: 0;
   left: 0;

   height: 100vh;
   width 100vw;
  .modal-outer {
    position: fixed;
    width: 650px;
    background: lightgrey;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-312.5px, -300px);
  }
  .no {
      position: fixed;
      color: white;
      font-size: 80px;
      width: 650px;
      height: 400px;

  }
`;

export default class Modal extends React.Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    let state = this.props.st;
    axios.get(`/api/games/${state}`).then(res => {
      this.setState({
        games: res.data.data
      });
    });
  }

  render() {
    return (
      <ModalBackdrop
        onClick={this.props.closeMenu}
       
      >
        <div className="modal-outer"  ref={element => {
          this.props.assignElement(element);
        }}>
          {this.state.games.length ? (
            this.state.games.map(game => {
              return <Scoreboard key={game._id} game={game} />;
            })
          ) : (
            <h1 className="no">no games currently</h1>
          )}
        </div>
      </ModalBackdrop>
    );
  }
}
