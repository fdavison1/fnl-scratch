import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Map from './components/Map'
import Game from './components/Game'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">


    <Router>
    <Header />
      <Switch>
        <Route path='/' exact component={Map}/>
        <Route path='/game/:id' component={Game}/>
      </Switch>
    <Footer />
    </Router>

    </div>
  );
}

export default App;
