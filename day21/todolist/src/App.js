import React from 'react';
import './App.css';


let count =10;
class App extends React.Component {
  
  state ={todos:[     // STEP2 เราจะรู้ได้ไงว่าจะใส่ค่า state อะไรให้วิเคราะห์จาก Uiว่าสิ่งไหนซื้อกันและจะเก็บค่าอะไรบ้าง เช่น ชื่อtodoด
      {id:1,text:'todo1',isComplete:true},
      {id:2,text:'todo2',isComplete:false},
      {id:3,text:'todo3',isComplete:false},
      {id:4,text:'todo4',isComplete:true}
    ],
    newTodoText:''
  }

  constructor(){
    super();    
  }

  // renderTodo(){
  //   let todoList =[]
  //   for(let i =0;i<this.state.todos.length;i++){
  //     todoList.push(
  //       <li><input type="checkbox" checked = {this.state.todos[i].isComplete}/>
  //           <div>{this.state.todos[i].text}</div>
  //           <button className= 'del'> X </button>
  //       </li>
  //     )
  //   }
  //   return todoList
  // }

  //------------------------------------------------------------------------------------
  handleSubmit = (e) => {  //SEP4
    e.preventDefault();
    // let text = document.getElementById('new-todo').value    /// เก็บค่า value ไว้ที่ตัวแปร text ไม่นิยมทำ
    let newTodos = [...this.state.todos,
      {
        id:count++,
        text:this.state.newTodoText,
        isComplete:false
      }
    ]
    this.setState(
      {
      todos:newTodos
      }
    )
    // console.log(e.target[0])
  }
  //------------------------------------------------------------------------------------
  handleTicked = (e) =>{
    console.log(e.target.checked) 
    console.log(this.state.todos.map((x,indx)=>x.isComplete[indx]))
    let newTodos = [...this.state.todos.map((x,indx)=>x.isComplete[indx])]
    // this.setState(
    //   {
    //     todos:{isComplete:e.target.checked}
    //   }
    // )
  }

  render(){
    return (
      <div className = "containers">
        <form onSubmit={this.handleSubmit} >
          <input 
            type='text' 
            placeholder="Enter todo" 
            value={this.state.newTodoText} 
            onChange={
              (e) => this.setState({newTodoText:e.target.value})
            } 
          />

          <input type ='submit' value ='ADD'/>
        </form>
        <ul className ='element'>
          {this.state.todos.map((todo,indx)=>(  
            <li>
              <input 
                type="checkbox" 
                checked = {todo.isComplete}
                onClick ={this.handleTicked}
                // onClick={
                //   (e) => this.setState({todos:this.state.todos.map(check => check.isComplete === false ? {...check, isComplete: !check.isComplete } : check)})
                //   // 
                //   // this.setState({isComplete:e.target.checked})
                // } 
              /> 
              <div>{todo.text}</div>
              <button className= 'del'> X </button>
            </li>))
          }
          {/* {this.renderTodo()} */}

        </ul> 
      </div>
    );
  } 
}

export default App;
