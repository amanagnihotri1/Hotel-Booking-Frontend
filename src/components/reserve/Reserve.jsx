import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import axios from 'axios';
import "../reserve/reserve.css";
import { useContext } from 'react';
import { useState } from 'react';
import { searchContext } from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
export const Reserve =({setopenOption,hotelId}) => {
 const{dates}=useContext(searchContext);
  const {data,loading,error}= useFetch(`/hotels/room/${hotelId}`);
 const[selected,setSelected]=useState([]);
 const getDatesinRange=(startDate,endDate)=>
 {
  const start=new Date(startDate);
  const end=new Date(startDate);
  const date=new Date(start.getTime);
  let dates=[];
while(date<=end)
{
  dates.push(new Date(date));
  date.setDate(date.getDate()+1);
}
console.log(dates);
return dates;
}
const alldates=getDatesinRange(dates[0].startDate,dates[0].endDate);
const isAvailable=(roomNumber)=>
{
  const isFound=roomNumber.unavailableDates.some(dates=>alldates.includes(new Date(dates).getTime))
  return !isFound;
 } 

 const handleSelect=(e)=>
 {
  const checked=e.target.checked;
  const value=e.target.value;
  setSelected(checked?[...selected,value]:selected.filter(item=>item!=value));
 }
 const navigate=useNavigate();
 const handleClick=async()=>
 {
  try
  {
   await Promise.all(selected.map((roomId)=>
  {
      const res=axios.put(`/room/availability/${roomId}`,{dates:alldates,
      });
      return res.status(200).json(res.data);
    }))
    setopenOption(false);
    navigate("/");
  }catch(err)
  {
    return err;
 }
}
  return (
    <div className="reserve">
    <div className="rContainer">
    <CloseIcon onClick={()=>setopenOption(false)} className="rclose"/>
    <span className="s1">Select your room:</span>
    {data.map((item)=>(
<div className="rItem">
 <div className="rIteminfo">
  <div className="rTitle">{item.title}</div>
  <div className="rdesc">{item.desc}</div>
  <div className="rMax">Max People :<b>{item.maxPeople}</b></div>
  <div className="rPrice">Price : ₹ {item.price}</div>
  </div>
  <div className="rselectedRoom">
  {item.roomNumbers.map(rnumber=>
  (
    <div className="room">
    <label>{rnumber.number}</label>
    <input type="checkbox" value={rnumber._id} onChange={handleSelect} disabled={!isAvailable(rnumber)} className="check1"/>
    </div>
    ))}
</div>
    </div>
    ))}
    <button className='rButton' onClick={handleClick}>Reserve Now!</button>
    </div>
    </div>
  );
  }