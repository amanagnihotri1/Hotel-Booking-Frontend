import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../signup/signup.css";
export const Signup = () => {
  const navigate=useNavigate();
  const[error,setError]=useState(false);
  const[userinput,setuserInput]=useState({ 
  username:undefined,
  email:undefined,
  password:undefined,
  });
  const handleClick=async(e)=>
  {  
        e.preventDefault();
        const result=await axios.post("/auth/register",userinput);
        console.log(result.data);
        if(!result.data.success)
            setError(true); 
      else
     { 
        navigate("/"); 
     }
    }
  const handleChange=(e)=>
  {
    console.log(userinput);
     setuserInput(prev=>({...prev,[e.target.id]:e.target.value}));
  }
    return (  
     <div className='formpagewrapper'>
     <div className="lside">
     <img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Not found" />
     </div>
     <div className='rside'>
      <h1 className='heading'>Signup</h1>
      <label htmlFor="username" className='l1'>Username</label>
      <input type="text" id='username' onChange={handleChange} required/> 
      <br/>
      <label htmlFor="email" className='l1'>Email</label>
      <input type="email" id="email" onChange={handleChange} required/> 
      <br />
      <label htmlFor="passinput" className='l1'>Password</label>
      <input type="password" id="password" onChange={handleChange} required/>
      <br />
      { error && <span className='sp1'>Signup failed !</span>}
       <button className='b1' onClick={handleClick}>Submit</button> 
      </div>
     </div>  
     
  );
}
