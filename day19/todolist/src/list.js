import React from 'react';

function List(props){
    console.log(props)
    return (
        <div>
          {props.children} 
        </div>
      );     
}
          
export default List;

