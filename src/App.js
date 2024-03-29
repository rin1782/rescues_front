import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RescuesContainer from './containers/RescuesContainer'
import NavLinks from './components/NavLinks'
import Home from './components/Home'
import './index.css'

class App extends React.Component {

  render(){
    return (
      <div style={{margin: '20px'}}>
        <Router>
          <NavLinks/>
          <RescuesContainer/>
          <Route exact path='/' component={Home}/>
        </Router>
      </div>
    );
  }
}



export default App;
