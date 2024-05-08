/*  
   # Stop watch miniAssignment ==> Completed
   # Display FullName miniAssignment ==> Completed
   # Login Assignnmemt ==> Completed
*/

// let [ running , setRunning ] = useState(false); 
// let [elapsedTime , setelapsedTime] = useState(0);
  
//   useEffect(()=>{
    
//     let intervalId;
//     if( running ){
//        intervalId = setInterval(()=>{
//           setelapsedTime((prev)=>prev+1);
//           // console.log("Inside if cond: ",elapsedTime); 
//        },1000);    
//     }
    
//     return ()=>{ 
//       // console.log("return statement");
//       clearInterval(intervalId)
//     };

//   },[running]);

//   const formatTime = (second)=>{
        
//       let min = Math.floor(second/60);
      
//       let sec = parseInt(second%60);
//       // console.log(min," ",sec);
//       return `${min}:${sec < 10 ? '0' : ''}${sec}`
//   }

//   const startStop = ()=>{
//     setRunning(!running); 
//   }
  
//   const reset = ()=>{
//     setelapsedTime(0);
//     setRunning(false);
//   }

// let [formData , setFormData] = useState({
//    firstName:'',
//    lastName:'',
//    fullName:''
//  }) 

//  const handleInput = (e)=>{
//    const { name,value } = e.target;

//    setFormData({
//      ...formData,
//      [name]:value
//    })
//    // console.log(formData)
//  }

//  const formSubmit = (e)=>{
//    e.preventDefault();

//    const {firstName , lastName } = formData;
//    setFormData({
//      ...formData,
//      fullName:firstName+" "+lastName 
//    }) 
//  }

// <div >
// <h2>Full Name Display</h2>
// <form onSubmit={formSubmit} >
//   <label htmlFor="firstName" >First Name:</label>
//   <input 
//     type='text' 
//     id='firstName' 
//     name='firstName' 
//     value={formData.firstName}
//     onChange={handleInput} 
//     required
//   /><br/>
//   <label htmlFor="lastName" >Last Name:</label>
//   <input 
//     type='text' 
//     id='lastName'  
//     name='lastName' 
//     value={formData.lastName}
//     onChange={handleInput}
//     required 
//   /><br/>
//   <button type='submit' >Submit</button> 
// </form>
// {
//   formData.fullName && formData.fullName.trim() ? 
//   (<p>Full Name: {formData.fullName}</p>) : ''
// }

// </div>

// <div >
//       <h2>Login Page</h2>
//       {
//         message && (<p>{message}</p>)
//       }

//       {
//         !isSuccess &&
//         (<form onSubmit={onSubmitForm} >
//           <label htmlFor='userName'  >Username: </label>
//           <input 
//             type='text' 
//             id='userName' 
//             name='username' 
//             value={loginData.username} 
//             onChange={handleChangeEvent}
//             required
//           /><br/>
//           <label htmlFor='password'  >Password: </label>
//           <input 
//             type='password' 
//             id='password' 
//             name='password' 
//             value={loginData.password} 
//             onChange={handleChangeEvent}
//             required
//           /><br/>
//           <button type='submit'>Submit</button>
//         </form>)  
//       }
      
//     </div>