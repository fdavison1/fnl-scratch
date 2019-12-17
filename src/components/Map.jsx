import React from 'react'



class Map extends React.Component {
    state = {

    }
    
    showModal(){

    }
    
    render(){

        return(
            <div>
            
            <h1>Map</h1>
            
            <button
            onClick={ ()=> this.showModal }
            >Utah</button>
            
            </div>
    )
    }
}

export default Map