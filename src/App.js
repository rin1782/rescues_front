import React from 'react';
import {connect} from 'react-redux'
import RescuesContainer from './containers/RescuesContainer'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <RescuesContainer/>
      </div>
    );
  }
}



export default App;
