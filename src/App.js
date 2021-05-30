import React from 'react';

class App extends React.Component() {
  
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/rescues")
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default App;
