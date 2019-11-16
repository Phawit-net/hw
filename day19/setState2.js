class App extends React.Component {
    state = { name: 'john', skills: []}
     handleChangeName = () => {
      //this.setState({ name: "smith"});
      this.setState({ name: this.state.name ==="john"?"smith":"john"});
    }
     handleChangeSkill = () => {
    //   this.setState({
    //     skills: [
    //       { id: 3, name: 'Java' },
    //       { id: 4, name: 'C++' },
    //       { id: 5, name: 'Swift' }
    //     ]
    //   })
    this.setState({ skills:this.state.skills.length === 0 ? [
        { id: 3, name: 'Java' },
        { id: 4, name: 'C++' },
        { id: 5, name: 'Swift' }
        ]
      :[]
        
    });
    }
     
    render () {
      return (
        <div>
          <button onClick={this.handleChangeName}>
            change name: {this.state.name}
          </button>
          <button onClick={this.handleChangeSkill}>
            change skills: {this.state.skills.map(s => s.name)}
          </button>
        </div>
      )
    }
  }
  
   
  ReactDOM.render(
    <div>
      <App />
    </div>, 
    document.getElementById('root')
  )