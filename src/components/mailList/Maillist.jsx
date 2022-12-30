import "../mailList/maillist.css";
import React from "react";
const Mail=()=>
{
return(
    <div className="mailContainer">
    <h1>Save time, save money!</h1>
    <p>Sign up and we'll send the best deals to you</p>
    <div className="formContainer">
    <input type="text" name="" id="emailinput" />
    <button>Subscribe</button>
    </div>
    <div className="checkContainer">
    <input type="checkbox" name="checkinput" id="checkInput" />
    <label htmlFor="chechbox">Send me a link to get the FREE Booking.com app!   
    </label>
    
    </div>
    </div>
)
}
export default Mail;