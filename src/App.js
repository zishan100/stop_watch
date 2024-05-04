import React, { useState , useEffect } from 'react';
import './index.css';

function App () {
  
  let [ running , setRunning ] = useState(false); 
  let [elapsedTime , setelapsedTime] = useState(0);
  
  useEffect(()=>{
    
    let intervalId;
    if( running ){
       intervalId = setInterval(()=>{
          setelapsedTime((prev)=>prev+1);
          // console.log("Inside if cond: ",elapsedTime); 
       },1000);    
    }
    
    return ()=>{ 
      // console.log("return statement");
      clearInterval(intervalId)
    };

  },[running]);

  const formatTime = (second)=>{
        
      let min = Math.floor(second/60);
      
      let sec = parseInt(second%60);
      console.log(min," ",sec);
      return `${min}:${sec < 10 ? '0' : ''}${sec}`
  }

  const startStop = ()=>{
    setRunning(!running); 
  }
  
  const reset = ()=>{
    setelapsedTime(0);
    setRunning(false);
  }

  return (
    <div >
      <h2>Stopwatch</h2>
      <p>Time:{formatTime(elapsedTime)}</p>
      <button onClick={startStop} > { running ? 'Stop' : 'Start' } </button>
      <button onClick={reset} > Reset </button>  
    </div>
  );
  
}

export default App;
