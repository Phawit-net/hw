class App extends React.Component {
    render(){
    const myStyles = {
    padding:'10px 10px',
    border:'1px solid '+this.props.borderColor,
    fontSize:this.props.size,
    fontWeight:'bold'
    }
    const red={
      color:'red'
    }
    const pink={
      color:'pink'
    }
    const dot={
      color:this.props.dotColor
    }
    return (
      <span style={myStyles}>
      <span style={red}>L</span>
      <span style={dot}>.</span>
      <span style={pink}>O</span>
      <span style={dot}>.</span>
      <span style={red}>V</span>
      <span style={dot}>.</span>
      <span style={pink}>E</span>
     </span>
    )
  }
  }
  
  ReactDOM.render(
    <App size="50px" borderColor="orange" dotColor="blue" />,
    root
  )
  