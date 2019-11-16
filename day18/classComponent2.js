class App extends React.Component {
  
    myStyles = {
    padding:'10px 10px',
    border:'1px solid '+this.props.borderColor,
    fontSize:this.props.size,
    fontWeight:'bold'
    }
    red={
      color:'red'
    }
    pink={
      color:'pink'
    }
    dot={
      color:this.props.dotColor
    }
    
    render(){
    return (
      <span style={this.myStyles}>
        <span style={this.red}>L</span>
        <span style={this.dot}>.</span>
        <span style={this.pink}>O</span>
        <span style={this.dot}>.</span>
        <span style={this.red}>V</span>
        <span style={this.dot}>.</span>
        <span style={this.pink}>E</span>
     </span>
    )
  }
  }
  
  ReactDOM.render(
    <App size="50px" borderColor="orange" dotColor="blue" />,
    root
  )
  