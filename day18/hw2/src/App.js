import React from 'react';
import './App.css';
import Trello from './trello';


const data =["Subwoffer","Non-porous,washable","Wings","Beveled Bezel","Beveled Bevel","Seedless"]
function App() {

  return (  
    // <div>
    //   <ul>
    //   <Trello>Subwoffer</Trello>
    //   <Trello>Non-porous,washable</Trello>
    //   <Trello>Wings</Trello>
    //   <Trello>Beveled Bezel</Trello>
    //   <Trello>Beveled Bevel</Trello>
    //   <Trello>Seedless</Trello>
    //   </ul>
    // </div>  

    <div className='App'>
      <div className='header'>
        Phone Feature
      </div>
      <ul>
      {data.map((str,indx) =>(
        <Trello key={indx}>{str}</Trello>
        )
      )}
    </ul>
  </div>  

  );


}

export default App;
