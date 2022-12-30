import React, { useContext } from "react";
import "../Navbar/navbar.css";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../hooks/AuthContext";

const Navbar=()=>
{ 
  const navigate=useNavigate();
  const{data,error,loading,dispatch}=useContext(AuthContext);  
  const handleClick=()=>
  { 
      dispatch({type:"LOGOUT",payload:"Successfully Logged Out!!"});
      navigate("/");

  }  
  const{user}=useContext(AuthContext);
    return (
     <div className="navbar">
      <div className="navContainer">
     <Link to="/" style={{color:"white",textDecoration:"none"}}>
     <span className="logo">LamdaBooking</span>
      </Link> 
     {user?(
      <div className="navItems">
       {user.username} 
     <button className="navButton" onClick={handleClick}>Logout</button></div>):(<div>
       <button className="navButton" onClick={()=>navigate("/login")}>Sign in</button>
       <button className="navButton" onClick={()=>navigate("/signup")}>Signup</button>
       </div>)
       }  
      </div>
     </div>   
    )
};
export default Navbar;