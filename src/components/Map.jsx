import React from 'react'
import Modal from './Games-Modal'


class Map extends React.Component {
    state = {
        modalDisplay: false,
        st: ''
    }
    
    showModal(state){
        this.setState({
            modalDisplay: true,
            st: state
        })
    }
    
    render(){

        return(
            <div>
            
            <h1>Map</h1>
            
            <button
            onClick={ ()=> this.showModal('UT') }
            >Utah</button>

            {this.state.modalDisplay && <Modal st={this.state.st} />}
            </div>
    )
    }
}

export default Map