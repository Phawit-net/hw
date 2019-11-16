function Dec(props){
    
    const myStyles = {
    padding:'10px 10px',
    border:'1px solid '+props.borderColor,
    fontSize:props.size,
    fontWeight:'bold'
    }
    const red={
      color:'red'
    }
    const pink={
      color:'pink'
    }
    const dot={
      color:props.dotColor
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
  console.log(<Dec size="100px" />)
  
  ReactDOM.render(
    <Dec size="50px" borderColor="Green" dotColor="purple" />,
    root
  )
 
  

HTML
<div id="root"></div>
