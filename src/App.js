import React, { useState , useEffect } from 'react';
import './index.css';

function App () {
  
  let [formData , setFormData] = useState({
    firstName:'',
    lastName:'',
    fullName:''
  }) 

  const handleInput = (e)=>{
    const { name,value } = e.target;

    setFormData({
      ...formData,
      [name]:value
    })
    // console.log(formData)
  }

  const formSubmit = (e)=>{
    e.preventDefault();

    const {firstName , lastName } = formData;
    setFormData({
      ...formData,
      fullName:firstName+" "+lastName 
    }) 
  }
  

  return (
    <div >
      <h2>FULL NAME DISPLAY</h2>
      <form onSubmit={formSubmit} >
        <label htmlFor="firstName" >First Name:</label>
        <input 
          type='text' 
          id='firstName' 
          name='firstName' 
          value={formData.firstName}
          onChange={handleInput} 
        /><br/>
        <label htmlFor="lastName" >Last Name:</label>
        <input 
          type='text' 
          id='lastName'  
          name='lastName' 
          value={formData.lastName}
          onChange={handleInput} 
        /><br/>
        <button type='submit' >Submit</button> 
      </form>
      <p>{`${ formData.fullName && formData.fullName.trim() ? 'Full Name: '+formData.fullName : '' }    `} </p>
    </div>
  );
  
}

export default App;
