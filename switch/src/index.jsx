import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import "./index.css";

function Room() {
  const [isLit, setLit] = useState(true);            {//creating a state variable inside the component and initialized it with true
  }
  const lightedness = isLit ? "lit" : "dark";
  return (
  <div className={`room ${lightedness}`}>
    the room is {lightedness}              {//Initial statement which is true
  }
    <br />
    <button onClick={() => setLit(!isLit)}>
      flip
    </button>                                      
  </div>
  );
}

ReactDOM.render(<Room/>, document.querySelector('#root'));