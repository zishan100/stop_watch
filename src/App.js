import React, { useState , useEffect } from 'react';
import './index.css';

function App () {
  
  let [count,setCount ] = useState(0);
  
  return (
    <div >
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button 
        type='button' 
        onClick={(e)=>{
          setCount((prev)=>prev+1);
        }} 
      >Increment</button>
      <button 
        type='button'
        onClick={(e)=>{
          setCount((prev)=>prev-1)
        }} 
      >Decrement</button>
    </div>
  );
  
}

export default App;
