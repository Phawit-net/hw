class App extends React.Component {
  state = {
    name: 'John',
    age: 30,
    skills: [{ id: 1, name: 'React' },{ id: 2, name: 'NodeJS' }]
  }

  //ไม่จำเป็นต้องเปลี่ยนทั้งหมดทุก key มันจะMapให้เลยเฉพาะkeyที่เปลี่ยน
  changeName = () =>{
      this.setState({
          name:"Net"
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeName}>Click Me</button>
        <p>name: {this.state.name}</p>
        <p>age: {this.state.age}</p>
        <ul>
          {this.state.skills.map(skill => <li key={skill.id}>{skill.name}</li>)}
        </ul>
      </div>
    )
  }
}
