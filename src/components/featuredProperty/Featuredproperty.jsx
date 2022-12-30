import React from "react";
import useFetch from "../../hooks/useFetch";
import "../featuredProperty/featuredp.css";
const Featuredproperty = () => {
  const{data,loading,error}=useFetch("/hotels?featured=true&limit=5");
  console.log(data);
  return (
  <div className="fpList">
  {loading?("loading"):
  (<>
    {data.map((item)=>(
    <div className="fpItem" key={item._id}>
  <img src={(item.photos[0])?item.photos[0]:"https://reactnativecode.com/wp-content/uploads/2018/01/Error_Img.png"} alt="loading" className="fproperty"/>  
  <h1 className='fpname'>{item.name}</h1>
  <h4 className='fpCity'>{item.city}</h4>
  <h4 className="fpPrice">$ {item.cheapestPrice}</h4>
  {item.rating && <div className='moreDetail'>
  <h2>{item.rating}</h2><span>Excellent</span>
  </div>} 
  </div>
))}
</>)
}
</div> 
)};    
export default Featuredproperty;
