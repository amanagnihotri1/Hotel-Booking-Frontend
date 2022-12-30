import axios from "axios";
import { useState,useContext } from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../hooks/AuthContext";
import "../login/login.css";
const Login=()=>
{
  const [credentials,setCredentials]=useState({
  username:undefined,
  password:undefined,
});  
const{loading,error,dispatch}=useContext(AuthContext);
const handleChange=(e)=>
{  
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
}
const navigate=useNavigate();
const handleClick=async(e)=>
{
     e.preventDefault();
     console.log(credentials);
     dispatch({type:"LOGIN_START"});
     try
     {
       const res=await axios.post("/auth/login",credentials);
      console.log(credentials);
      console.log(res);
       dispatch({type:"LOGIN_SUCCESS",payload:res.data.details}); 
      console.log(res.data.details);
      navigate("/");
     }
     catch(err)
     {
      console.log(err);
        dispatch({type:"LOGIN_FAILURE",payload:err.response.data});
        console.log(err);
      }
}
return (
    <div className="lcontainer">
    <input 
     type="text" 
     placeholder="Username" 
     className="textbox"
     id="username" 
     onChange={handleChange}
    
     />
     <input 
     type="password" 
     placeholder="Password" 
     className="passwordbox"
     id="password" 
     onChange={handleChange}
     />
     <button className="lbutton" disabled={loading} onClick={handleClick}>Login</button>
     {error && <span className="errdisplay">⚠️ {error.message}  </span>}   
     </div> 
  );
}
export default Login;
 