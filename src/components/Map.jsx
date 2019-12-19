import React from "react";
import Modal from "./Games-Modal";
import USAMap from "react-usa-map";
import styled from 'styled-components'

class Map extends React.Component {
  state = {
    modalDisplay: false,
    st: ""
  };

  closeMenu = event => {
    const greyBack = document.getElementById('grey-back')
      if (greyBack.contains(event.target)) {
      this.setState({ modalDisplay: false }, () => {
        greyBack.removeEventListener("click", this.closeMenu);
      });
    }
  };
  showMenu = () => {
    this.setState({modalDisplay:true}, () => {
      const greyBack = document.getElementById('grey-back')
          greyBack.addEventListener('click', this.closeMenu)
      })
  };

  mapHandler = event => {
    this.setState({
      st: event.target.dataset.name
    });
    this.showMenu();
  };
  assignElement = (el) => {
    this.Modal = el
  }

  render() {
    return (
      <>
      <MapPage>
        <input placeholder="username" />
        <input placeholder="password" />
        <button>confirm</button>
        <div className="App">
          <USAMap onClick={this.mapHandler} />
          {/* <USAMap onClick={() => {this.toggleModal(); this.mapHandler()}} /> */}
        </div>
      </MapPage>
          {this.state.modalDisplay ? (
            <Modal closeMenu={this.hideMenu} st={this.state.st} assignElement={this.assignElement} />
          ) : null}
          </>
    );
  }
}


export default Map;

const MapPage = styled.div `
path:hover {
    opacity: 0.60;
    cursor:  pointer;
    transform: scale(1.005);
    z-index: 3;}
    
    `
