import React from 'react';


function Trello(props) {
    const {children} = props //ประกาศตัวแปรขึ้นใหม่ชื่อว่า lastname 
    // return (
    //   <li>
    //     {props.children}
    //   </li>
    // );
    return (
          <div>
            {children}  
            {props.children} 
          </div>
        );
  }
            
export default Trello;
