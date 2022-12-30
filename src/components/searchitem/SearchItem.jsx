import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react'
import "../searchitem/searchitem.css";
export const SearchItem = ({item}) => {
  return (
    <div className='cardwrapper'>
    <div className="placeimage">
    <img src={item.photos[0]}/>    
    </div>
    <div className="middleInfo">
    <h1>{item.name} </h1>
    <span className='siFree'>{item.desc}</span>
    <span className='siUpdate'>•FREE cancellation <br />• No prepayment needed</span>
    </div>
    <div className="rightinfo">
    {item.rating && <div className="siRating">
    <span>Excellent</span>
    <button>{item.rating}</button>  
    </div>}
    <div className='siDetailtext'>
      <span className='siprice'>${item.cheapestPrice}</span>
      <span className='taxOP'>No cancellation Charge</span>
       <Link to={`/hotel/${item._id}`}>
        <button
          className='checkbut'>See Availablity</button> 
          </Link>
     </div>
    </div>
    </div>
  )
}
export default SearchItem;