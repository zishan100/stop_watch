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
      <h2>Full Name Display</h2>
      <form onSubmit={formSubmit} >
        <label htmlFor="firstName" >First Name:</label>
        <input 
          type='text' 
          id='firstName' 
          name='firstName' 
          value={formData.firstName}
          onChange={handleInput} 
          required
        /><br/>
        <label htmlFor="lastName" >Last Name:</label>
        <input 
          type='text' 
          id='lastName'  
          name='lastName' 
          value={formData.lastName}
          onChange={handleInput}
          required 
        /><br/>
        <button type='submit' >Submit</button> 
      </form>
      {
        formData.fullName && formData.fullName.trim() ? 
        (<p>Full Name: {formData.fullName}</p>) : ''
      }
      
    </div>
  );
  
}

export default App;
