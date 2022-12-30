import React from 'react';
import getTime from 'date-fns/getTime';
import "react-date-range/dist/styles.css"; 
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import "react-date-range/dist/theme/default.css"; 
import { DateRange } from 'react-date-range';
import "../Header/header.css";
import { AuthContext } from '../../hooks/AuthContext';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import {useState} from 'react';
import {format} from "date-fns";
import { useNavigate } from 'react-router-dom';
import { searchContext } from '../../hooks/useContext';  
const Header = ({type}) => {
 const navigate=useNavigate(); 
 const[destination,setDestination]=useState("");
 const[openDate,setOpenDate]=useState(false);  
 const{user}=useContext(AuthContext);
 const[openOption,setopenOption]=useState(false);
 const [options,setOptions]=useState({
    adult:1,
    children:0,
    room:1
})
const handleOption=(name,operation)=>
{
  setOptions((prev)=>
  {
    return { 
      ...prev,[name]:operation==='i'? options[name]+1:options[name]-1,
    }
  })
}
  const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key:"selection",
        },]); 
        const {dispatch}=useContext(searchContext);
        const handleSearch=()=>
        {
          dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}});
          navigate("/list",{state:{destination,dates,options}});
        };
  return (
<div className="header">
 <div className= {type==="list"? "headerContainer listmode":"headerContainer"}>
 <div className="headerList">
     <div className="headerListItem" id='high'>
     <HotelIcon />
     <span className='high'>Stays</span>
     </div>
     <div className="headerListItem">
     <FlightIcon /><span>Flights</span>
     </div>
     <div className="headerListItem">
     <CarRentalIcon /><span>Car Rental</span>
     </div>
     <div className="headerListItem">
     <LocalTaxiIcon /><span>Taxi</span>
     </div>
    </div> 
    {
      type!=="list" &&
     <><h1>Find your next stay</h1>
      <p>Search low prices on hotels, homes and much more...</p>
     <div className="headerSearch">
     <div className="headerSearchItem">
    <BedIcon className="searchicon"/><input type="text" name="search" id="searchplace" placeholder="Where are u going?" onChange={e=>setDestination(e.target.value)}/>
     </div>
     <div className="headerSearchItem">
     <CalendarMonthIcon className='searchicon' onClick={()=>setOpenDate(!openDate)} /> 
     <span>
     {`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>{openDate && <DateRange
  editableDateInputs={true}
  onChange={(item)=>setDates([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={dates}
  className="date"
/>}
     </div>   
     <div className='headerSearchItem'>
     <PersonIcon className='searchicon'/><span onClick={()=>setopenOption(!openOption)}>{`${options.adult} adult- ${options.children} children - ${options.room} room`}</span>
     <UnfoldMoreIcon/>
    {openOption &&
    <>
    <div className="option">
        <div className="optionItem">
        <span>Adult</span>
        <div className="optionCounter">
        <button  disabled={options.adult<=1} onClick={()=>handleOption("adult",'d')}>-</button>
        <span>{options.adult}</span>
        <button onClick={()=>handleOption("adult",'i')}>+</button> 
        </div>
       </div>
      <div className="optionItem">
      <span>Children</span>
      <div className="optionCounter">
      <button disabled={options.children<=0} onClick={()=>{handleOption("children",'d')
      if(options.children<0)
      return; 
      }}>-</button>
       <span>{options.children}</span>
       <button onClick={()=>handleOption("children",'i')}>+</button> 
       </div>
      </div>
      <div className="optionItem">
       <span>Room</span>
       <div className="optionCounter">
       <button disabled={options.room<=1} onClick={()=>handleOption("room",'d')}>-</button>
       <span>{options.room}</span>
       <button onClick={()=>handleOption("room",'i')}>+</button> 
       </div>
      </div>
     </div>
     </>}
     </div>
     <div className='headerSearchItem'>
     <button className='searcharea' onClick={handleSearch}>
     Search
     </button>
     </div>
     </div>
     </>
     } 
  </div> 
</div>
);
}
export default Header;