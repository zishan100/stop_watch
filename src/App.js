import React, { Component } from 'react';
import './index.css';

class App extends Component{
  
  constructor(props){
    super(props);

    this.state = { 
      count:0
    } 
  }
  
  render(){
    return (
      <div >
        <h2>Counter App</h2>
        <p>Count: {this.state.count}</p> 
        <button 
          type='button' 
          onClick={(e)=>this.setState((prev)=>{ 
              return {count:prev.count+1} 
          })} 
        >Increment</button>
        <button 
          type='button' 
          onClick={(e)=>this.setState((prev)=>{
            return { count:prev.count-1 }
          })} 
        >Decrement</button>    
      </div>
    );  
  } 
  
  
}

export default App;
