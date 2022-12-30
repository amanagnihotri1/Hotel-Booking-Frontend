import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import "../list/list.css";
import SearchItem from "../../components/searchitem/SearchItem.jsx";
import {useState} from "react";
import { useLocation } from 'react-router-dom';
import {format} from "date-fns";
import { DateRange } from 'react-date-range';
import useFetch from '../../hooks/useFetch';
const List = () => {
  const location=useLocation(); 
  const[openDate,setOpenDate]=useState(false);
  const[dates,setDates]=useState(location.state.dates);
  const[destination,setDestination]=useState(location.state.destination);
  console.log(destination);
  const[options,setOptions]=useState(location.state.options);
  const[max,setmax]=useState(undefined);
  const[min,setmin]=useState(undefined);
  const{data,loading,error,refetch}=useFetch(`/hotels?city=${destination}&min=${min || 0 }&max=${max || 999 }`);
const handleClick=()=>
{
  refetch();
}
console.log(data);
  return (
    <div>
    <Navbar/>
    <Header type="list"/>
    <div className="listContainer">
    <div className="listWrapper">
    <div className="listSearch">
    <h1 className="lsTitle">Search</h1>
    <div className="lsitem">
    <label htmlFor="propertySearch">Destination</label>
    <input type="text" name="placeName" id="placename" placeholder={location.state.destination} onChange={(e)=>setDestination(e.target.value)}/>
    </div>  
    <div className="lsitem">
    <label htmlFor="dateSearch">Check-in Date</label>
   <span onClick={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>  
   {openDate && <DateRange onChange={item=>setDates([item.selection])} minDate={new Date()} 
   ranges={dates}
   /> }
    </div>
    <div className="lsitem">
    <label htmlFor="">Option</label>
    <div className="lsOptions">
    <div className="lsOptionItem">
      <span className='lsOpenText'>Min Price <small>per Night</small>
      </span>
    <input type="number" className="lsinput" onChange={(e)=>setmin(e.target.value)}/>
    </div>
    <div className="lsOptionItem">
    <span className='lsOpenText'>Max Price <small>per Night</small>
      </span>
    <input type="number" className="lsinput" onChange={(e)=>setmax(e.target.value)}/>
    </div>
    <div className="lsOptionItem">
      <span className='lsOpenText'>
       Adult 
      </span>
    <input type="number" className="lsinput" placeholder={location.state.options.adult} />
    </div>
    <div className="lsOptionItem">
      <span className='lsOpenText'>
       Children 
      </span>
    <input type="number" className="lsinput"  placeholder={location.state.options.children}/>
    </div>
    <div className="lsOptionItem">
      <span className="lsOpenText">
       Rooms
      </span>
    <input type="number" className="lsinput" />
    </div>
    </div>
    </div>  
    <button onClick={handleClick}>Search</button>
    </div>
     <div className="listResults">
    {loading?"loading":<>
     {data.map(itm=>
<SearchItem item={itm} key={itm._id}/>
)
}
    </>
    }
    </div>  
    </div>   
    </div>
    </div>
    );
}
export default List;