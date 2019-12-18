import React from 'react';
import './App.css';
import Map from './components/Map'
import Game from './components/Game'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    {/* <Map /> */}

    <Router>
      <Switch>
        <Route path='/' exact component={Map}/>
        <Route path='/game/:id' component={Game}/>
      </Switch>
    </Router>


    </div>
  );
}

export default App;
