function run(){
    const input = prompt("Red or Blue?")
    return input =="Red" ? 'Reality': 'Matrix'
  }
  
  // const App =(
  //   <div>{run()}</div>
  // )
  
  ReactDOM.render(
    run(),
    document.getElementById('root')
  )

  HTML
  <div id="root"></div>
 //---------------------------------------------- 
//แบบที่อาจารย์เฉลย

const answer = prompt("Red or Blue?")
const Reality = (
  <p style = {{fontWeight:'bold',color:'red'}}>Reality...</p>
)

const Matrix = (
  <p style = {{fontWeight:'bold',color:'darkgreen'}}>Matrix...</p>
) 

const App = 
  answer ==='Red'?Reality:
  answer ==='Blue'?Matrix:"..."

ReactDOM.render(
  App,
  root
)
