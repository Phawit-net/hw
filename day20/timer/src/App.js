import React from 'react';
import './App.css';

class App extends React.Component {

handleStartClick = ()=>{
  alert('Starting...')
}

handleStopClick = ()=>{
  alert('Stopping...')
}

render(){
  return (
    <div className="App">
      <h1>
        00:00:00
      </h1>
      <button type="button" onClick ={this.handleStartClick}>start</button>
      <button type="button"onClick ={this.handleStopClick}>stop</button>
    </div>
    );
  }
}

export default App;
