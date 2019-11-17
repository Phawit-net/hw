import React from 'react';

class Button extends React.Component {
    state = { todos: []}
    handleClick = () => {
        this.setState({ todos : document.getElementById("todoId").value});
        console.log(this.state)
    }
    render() {
        return (
            <div className ="InputCol">
                <input type="text" className="input" id="todoId"/> 
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
 }
 
export default Button;