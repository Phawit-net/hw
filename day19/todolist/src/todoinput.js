import React from 'react';

class TodoInput extends React.Component {
    state = { todo:""}
    handleChange =(e) =>{
        console.log(e.target.value)
        this.setState({ todo:e.target.value})
    }

    handleClick =(e) =>{
        alert(this.state.todo)
    }

    render(){
        return(
            <div className ="InputCol">
                <input type="text" className="input" id="todoId" onChange={this.handleChange}/> 
                <button onClick={this.handleClick}>Click me</button> 
            </div>
        )
    }

}

export default TodoInput;
