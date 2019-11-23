import React from 'react';
import './App.css';

class App3 extends React.Component {
    state = {todos :[
        { firstName: "Gourge", lastName: "Longman", text: 'Some text 1', image: 'https://image.freepik.com/free-photo/white-horses-camargue-france_119101-9.jpg' },
        { firstName: "Zofia", lastName: "Olson", text: 'Some text 2', image: 'https://image.freepik.com/free-photo/tiger-looking-straight-ahead_1286-73.jpg?1' },
        { firstName: "Elif", lastName: "Salt", text: 'Some text 3', image: 'https://image.freepik.com/free-photo/3d-landscape-with-herd-elephants_1048-7804.jpg' },
        { firstName: "Kyal", lastName: "Hogan", text: 'Some text 4', image: 'https://image.freepik.com/free-photo/cute-pug-with-santa-hat-gift-laying_23-2148348108.jpg' },
      ]}
 
    render(){
    return (
      <div className = "align">
        <h1>Render Post</h1>
        {this.state.todos.map(todo => (
            <div >
                <div><img src = {todo.image}/></div>
                <div className = "align">{todo.firstName + " "+ todo.lastName}</div>
                <div className = "align">{todo.text}</div>
            </div>
        ))}
      </div>
    )
  }
}
export default App3;