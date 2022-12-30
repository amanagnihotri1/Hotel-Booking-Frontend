import React,{useContext, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import Navbar from '../../components/Navbar/Navbar';
import RoomIcon from '@mui/icons-material/Room';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import Maillist from "../../components/mailList/Maillist";
import "../Hotel/hotel.css";
import { Reserve } from "../../components/reserve/Reserve";
import usefetch from "../../hooks/useFetch";
import { searchContext } from '../../hooks/useContext';
import { AuthContext } from '../../hooks/AuthContext';
const Hotel = () => {
  const s=useLocation();
  const navigate=useNavigate();
  const[openOption,setopenOption]=useState(false);
    const id=s.pathname.split("/")[2];
  const{dates,options}=useContext(searchContext);
  const{data,loading,error,refetch}=usefetch(`/hotels/find/${id}`);
  const[slider,setSlider]=useState(0);
  const[open,setOpen]=useState(false);
  const {user}=useContext(AuthContext);
  const MILISECONDS_PER_DAY=1000*60*60*24;
 console.log(user);
  function dayDifference(date1,date2)
  {
    const timeDiff=Math.abs(date2.getTime()-date1.getTime());
    const diffdays=Math.ceil(timeDiff / MILISECONDS_PER_DAY);
    return diffdays;
  }
  const handleClick=()=>
  {
    if(user)
    {
      setopenOption(true);
       
    }else
    {
      navigate("/login");
    }
  }
  const days=dayDifference(dates[0].endDate,dates[0].startDate);
  const handleOpen=(i)=>
  {
    setSlider(i);
    setOpen(true); 
  }
   // for fetching stay period of a user
  const handleMove=(direction)=>
  {
let newSlideNumber;
if(direction==='l')
{ newSlideNumber=slider===0?5:slider-1;
}
  else
{
  newSlideNumber=slider===5?0:slider+1;
}
setSlider(newSlideNumber);  
}
return (
    <div>
     <Navbar/>
     <Header type="list"/>
    {loading?("loading"): (<div className="hotelContainer">
      {open && <div className="slider">
      <CancelIcon className='close' onClick={()=>setOpen(false)} />
      <KeyboardDoubleArrowLeftIcon className='larrow' onClick={()=>handleMove('l') }/>
      <KeyboardDoubleArrowRightIcon className='rarrow' onClick={()=>handleMove('r')}/>
      <div className="sliderWrapper">
      <img src={data[0]?.photos[slider]} alt="Not Found" className='sliderImg'/>
      </div>
      </div>}
      
     <div className="hotelWrapper">
     <button className="booknow">Reserve or Book Now!</button>
     <h1 className="hotelTitle">{data[0]?.name}</h1> 
     <div className="hoteladdress">
     <RoomIcon/>
     <span >{data[0]?.address}</span>
     </div>
     <span className='hotelDistance'>Excellent location-{data[0]?.distance} from center</span>
     <span className='hotelPriceHighlights'>Book a stay over ${data[0]?.cheapestPrice} at this property and get a free airport taxi</span>
     <div className="hotelImages">
     {
       data[0]?.photos.map((photo,i)=>(
       <div className="hotelImgWrapper" key={i}>
       <img onClick={()=>handleOpen(i)} src={photo} className="hotelImg"/> 
     </div>  
      ))
     } 
     </div>
     <div className="hotelDetails">
     <div className="hotelDetailsTexts">
     <h1 className="hotelTitle">Stay in the heart of {data[0]?.city}</h1>
         <p className="hotelDesc">
        {data[0]?.desc}
         </p>
      </div>
      <div className="hotelDetailsPrice">
        <h1>Perfect for {days}-Night Stay!</h1>
        <span>
        The Jianguo Hotel Qianmen is located near Tiantan Park, just a 10-minute walk from the National Center for the Performing Arts and Tian'anmen Square
        </span>
       <h2><b>
        $ {days*data[0]?.cheapestPrice}
        </b> ({days} Nights)</h2>
       <button onClick={handleClick}>Reserve or Book Now!</button>
      </div>
     </div>
     </div>
     <Maillist/>
     <Footer/>
     </div> )}
     {openOption && <Reserve setopenOption={setopenOption} hotelId={id}/>}
    </div>
  );
}
export default Hotel;