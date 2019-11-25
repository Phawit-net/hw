import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    inputvalue:'',
    text :[
        {name: 'Hello'},
        {name: 'Goodbye'},
        {name: 'My friend'},
        {name: 'Kiddle'},
        {name: 'Weeble'}
    ],
    search :[
      {name: 'Hello'},
        {name: 'Goodbye'},
        {name: 'My friend'},
        {name: 'Kiddle'},
        {name: 'Weeble'}
    ]
  }

  handleChange =(e) =>{
    this.setState({
      search : this.state.text.map(x=> x.name.includes(e.target.value) === true ? x : "")
    })
     console.log(this.state.search)
  }

  render(){
    return (
      <div className="App">
          <input type='text' onChange ={this.handleChange}/>
            {this.state.search.map(({name},idx)=>(
                <div key ={idx}>{name}</div>
            ))}
      </div>
    );
  }
}

export default App;
