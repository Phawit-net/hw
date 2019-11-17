import React from 'react';

class TodoInput extends React.Component {
    render(){
        return(
            <div className ="InputCol">
                <input type="text" className="input" id="todoId"/> 
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }

}

export default TodoInput;
