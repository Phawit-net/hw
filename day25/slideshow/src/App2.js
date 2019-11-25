import React from 'react';

class App2 extends React.Component {
  state = {
    inputvalue:'',
    text :[
        {name: 'Hello'},
        {name: 'Goodbye'},
        {name: 'My friend'},
        {name: 'Kiddle'},
        {name: 'Weeble'},
    ],
    search :[]
  }

  handleChange =(e) =>{
    this.setState({
        inputvalue : e.target.value
    })
  }

  render(){
    return (
      <div className="App">
          <input type='text' onChange ={this.handleChange}/>
          <div>
            {this.state.text.map(({name})=>(
                <div>{name}</div>
            ))}
          </div>
      </div>
    );
  }
}

export default App2;
