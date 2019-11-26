// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   state = {
//     inputvalue:'',
//     text :[
//         {name: 'Hello'},
//         {name: 'Goodbye'},
//         {name: 'My friend'},
//         {name: 'Kiddle'},
//         {name: 'Weeble'}
//     ],
//     search :[
//       {name: 'Hello'},
//         {name: 'Goodbye'},
//         {name: 'My friend'},
//         {name: 'Kiddle'},
//         {name: 'Weeble'}
//     ]
//   }

//   handleChange =(e) =>{
//     this.setState({
//       search : this.state.text.map(x=> x.name.includes(e.target.value) === true ? x : "")
//     })
//      console.log(this.state.search)
//   }

//   render(){
//     return (
//       <div className="App">
//           <input type='text' onChange ={this.handleChange}/>
//             {this.state.search.map(({name},idx)=>(
//                 <div key ={idx}>{name}</div>
//             ))}
//       </div>
//     );
//   }
// }

// export default App;

////--------------------------------เฉลย----------------------------------------------------------------------------

import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        list : ["CodeCamp","Hello","Synhub","Thai Programmer","Muda","Pantip","Ajarn Job"],
        searchWord :''
      }
  }

  renderList(){
    const searchWord = this.state.searchWord;
    let filtered  =this.state.list.filter((list) => {
      if(searchWord ===''){
        return true
      } else {
        return list.toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase())
      }
    })
    return filtered.map((list=>{
      return<li>{list}</li>
    }))
  }

  handleChange = (e)=>{
    this.setState({
      searchWord : e.target.value
    })
  }

  render(){
    return (
      <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center',height:'100vh'}}>
        <div>
            <input type='text' onChange ={this.handleChange}/>
        </div>
        <div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}
  
