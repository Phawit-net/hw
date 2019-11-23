import React from 'react';
import './App.css';

class App2 extends React.Component {
    state = {people:[
        {name:"Gourge",surname:"Longman",age:13},
        {name:"Zofia",surname:"Olson",age:20},
        {name:"Elif",surname:"Salt",age:30},
        {name:"Kyal",surname:"Hogan",age:12}
    ]}
  
    render(){
    return (
      <div>
        <h1>Render Table</h1>
        {this.state.people.map(todo => (
            <tr>
                <td className= "TableD">{todo.name}</td> 
                <td className= "TableD">{todo.surname}</td>
                <td className= "TableD">{todo.age}</td>
            </tr>  
        ))}
      </div>
    );
  }
  }
  export default App2;
  