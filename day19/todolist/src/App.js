import React from 'react';
import './App.css';
// import List from './list';
// import Button from './button';
import TodoInput from './todoinput';
// import Todolist from './todolist';

class App extends React.Component{
  // state = { todoItems:[]}

  render(){
    // let {todoItems} =this.state
    return (
      <div className = "Layout">
        <div className="App">
          <TodoInput></TodoInput>
          {/* <Todolist items ={todoItems}></Todolist> */}
        </div>
      </div>
    );
  }
}

export default App;
