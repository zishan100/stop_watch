import React, { useState , useEffect } from 'react';
import './index.css';

function App () {
  
  let [loginData , setLoginData ] = useState({username:'', password:''})
  let [message ,setMessage] = useState('');

  let [isSuccess , setIsSuccess ] = useState(false);

  const handleChangeEvent = (e)=>{
    
    let { name , value } = e.target;   
    
    setLoginData({
      ...loginData,
      [name]:value
    })

    // console.log(loginData);

  } 

  const onSubmitForm= (e)=>{
      e.preventDefault();
      
      // console.log(loginData); 
      const { username , password } = loginData
      
      if( username !== 'user' || password !== 'password' ){
        setMessage('Invalid username or password');  
        return; 
      }

      setMessage('Welcome, user!');
      setLoginData({username:'',password:''});
      setIsSuccess(true);
  }

  return (
    <div >
      <h2>Login Page</h2>
      {
        message && (<p>{message}</p>)
      }

      {
        !isSuccess &&
        (<form onSubmit={onSubmitForm} >
          <label htmlFor='userName'  >Username: </label>
          <input 
            type='text' 
            id='userName' 
            name='username' 
            value={loginData.username} 
            onChange={handleChangeEvent}
            required
          /><br/>
          <label htmlFor='password'  >Password: </label>
          <input 
            type='password' 
            id='password' 
            name='password' 
            value={loginData.password} 
            onChange={handleChangeEvent}
            required
          /><br/>
          <button type='submit'>Submit</button>
        </form>)  
      }
      
    </div>
  );
  
}

export default App;
