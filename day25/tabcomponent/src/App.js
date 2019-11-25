import React from 'react';
import './App.css';
import TabMenu from './components/tabmenu'
import Content from './components/content'

class App extends React.Component {
  state ={
    menu:[
      {id:1 , name : "home" , text: "Lorem home1" ,selected:false},
      {id:2 , name : "menu1" , text: "Lorem menu1" ,selected:false},
      {id:3 , name : "menu2" , text: "Lorem menu2" ,selected:false},
      {id:4 , name : "menu3" , text: "Lorem menu3" ,selected:false}
    ],
    show :[{id:1 , name : "home" , text: "Lorem home1",selected:true}]
  }

  handleClickMenu = id =>() =>{
    this.setState(state =>({
      show : state.menu.filter(x=>x.id === id)
    }))
    //console.log(this.state.show)
  }

  render(){
    return (
      <div className="App">
        <hr/>
        <div className ="tab">
        {this.state.menu.map(({name,id}) =>(
              <TabMenu 
                menuName = {name}
                menuId ={id}
                onClickMenu = {this.handleClickMenu(id)}
              />
            ))} 
        </div>

        <div>
        {this.state.show.map(({name,id,text}) =>(
          <Content
            menuName = {name}
            contentText = {text}
          />
          ))} 
        </div>
      </div>
    );
  }
}

export default App;
