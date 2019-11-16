import React from 'react';
import './App.css';

function Popup(props) {
  return (
    <div className="App">
        <div className="block">
          {props.heading}
        </div>
        <div className="block2">
          {props.children}
        </div>
        <div className="block3">
            <button className = "btn">Close</button>
        </div>
    </div>
  );
}

export default Popup;
