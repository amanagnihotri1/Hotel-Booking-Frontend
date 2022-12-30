import React from 'react'
import "../featured/featured.css";
import useFetch from '../../hooks/useFetch.js';
const Featured = () => {
const{data,loading,error}=useFetch("/hotels?featured=true&limit=4"); 
console.log(data);
  return (
    <div className="featured">  
    <div className="featuredItem">
     <img className="featuredimage" src="https://static.toiimg.com/photo/31346158.cms"/>
     <div className="featuredTitle">
      <h1>Agra</h1>
     <p>4040 Properties</p>
     </div>
    </div>   
    <div className="featuredItem">
     <img className='featuredimage' src="https://www.micato.com/wp-content/uploads/2018/09/jaipur-1110x700.jpg" />
     <div className="featuredTitle">
     <h1>Jaipur</h1>
     <p>1230 Properties</p> 
     </div>
    </div>   
    <div className="featuredItem">
     <img className='featuredimage' src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/07/Bangkok-cover_11th-Mar.jpg" />
     <div className="featuredTitle">
     <h1>Bangkok</h1>
     <p>2340 Properties</p> 
     </div>
    </div>   
    </div>
  )
}
export default Featured;