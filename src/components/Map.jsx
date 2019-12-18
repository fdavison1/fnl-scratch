import React from "react";
import Modal from "./Games-Modal";
import USAMap from "react-usa-map";
import styled from 'styled-components'

class Map extends React.Component {
  state = {
    modalDisplay: false,
    st: ""
  };

//   toggleModal = () => {
//     this.setState({
//       modalDisplay: !this.state.modalDisplay
//     });
  
  closeMenu = event => {
      if (!this.Modal.contains(event.target)) {
        console.log('close menu is running')
      this.setState({ modalDisplay: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  };
  showMenu = () => {
      // console.log('menu is working')
      this.setState({modalDisplay:true}, () => {
          document.addEventListener('click', this.closeMenu)
      })
  };

  mapHandler = event => {
    console.log(event.target.dataset.name);
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
      <MapPage>
        <input placeholder="username" />
        <input placeholder="password" />
        <button>confirm</button>
        <div className="App">
          <USAMap onClick={this.mapHandler} />
          {/* <USAMap onClick={() => {this.toggleModal(); this.mapHandler()}} /> */}
          {this.state.modalDisplay ? (
            <Modal closeMenu={this.hideMenu} st={this.state.st} assignElement={this.assignElement} />
          ) : null}
        </div>
      </MapPage>
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
