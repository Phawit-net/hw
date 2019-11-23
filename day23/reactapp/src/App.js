import React from 'react';
import './App.css';

class App extends React.Component {
  state = ["a","b","c","d","e","f","g"]

  render(){
  return (
    <div>
      <h1>Render List</h1>
      {this.state.map(x =>(
        <ul><li>
            {x}
        </li></ul>
      ))}
    </div>
  );
}
}
export default App;
