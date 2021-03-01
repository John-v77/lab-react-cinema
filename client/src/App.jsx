import React, { Component } from 'react';
import Home from './components/Home';
import Movies from './components/movies'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props}/>}/>
          <Route exact path='/movies' render={(props) => <Movies {...props}/>}/>
          <Route exact path='/movieInfo:id' render={(props) => <Movies {...props}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
