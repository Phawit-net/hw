import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    currentId : 0,
    image : [
      {id:1,link:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(1).jpg' },
      {id:2,link:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(6).jpg' },
      {id:3,link:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg' },
      {id:4,link:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg' },
      {id:5,link:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(16).jpg' }
    ]
  }

  handleNext =(id) => ()=>{
    this.setState({
      currentId: id+=1
    })
  }
  
  handleBack =(id) => ()=>{
    this.setState({
      currentId: id-=1
    })
  }

  render(){
    return (
      <div className="App">
          <img className ="imgSize" 
              src={this.state.image[this.state.currentId].link}/>
        <div>
          <button className ="button" 
              type = 'button' 
              onClick = {this.handleBack(this.state.currentId)} 
              disabled = {this.state.currentId === 0 ? true :false}>
                Prev</button>
          <button className ="button" 
              type = 'button' 
              onClick = {this.handleNext(this.state.currentId)}
              disabled = {this.state.currentId === 4 ? true :false}>
                Next</button>
        </div>
      </div>
    );
  }
}

export default App;
