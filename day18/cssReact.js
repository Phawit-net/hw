const myStyles = {
    padding:'10px 10px',
    border:'1px solid #000',
    fontSize:'100px',
    fontWeight:'bold',
    backgroundColor:'linear-gradient(to right bottom, #430089, #82ffa1)'
  }
  const red={
    color:'red'
  }
  const pink={
    color:'pink'
  }
  const App = (
      <span style={myStyles}>
      <span style={red}>L</span>
      <span>.</span>
      <span style={pink}>O</span>
      <span>.</span>
      <span style={red}>V</span>
      <span>.</span>
      <span style={pink}>E</span>
     </span>
  )
  
  ReactDOM.render(
    App,
    document.getElementById('root')
  )

//-------------------------------- CSS
.postcard{
    color:red;
    border:1px solid #000;
  }
  
  /* style={{color:'red'} , {border: '1px solid #000'}} */

 //--------------------------------- 

HTML
  <div id="root"></div>