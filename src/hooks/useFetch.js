import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const useFetch=(url)=>
{
    const[data,setData]=useState([]);
    const[loading,setloading]=useState(false);
    const[error,seterror]=useState(false);
useEffect(() => {
const fetchData=async()=>
{
    setloading(true);
    try {   
      const res=await axios.get(url);
      setData(res.data);
      
    } catch (err) {
     seterror(true);
    }
    setloading(false);
}
fetchData();
},[url])

const refetch=async()=>
{
    setloading(true);
    try {
        
      const res=await axios.get(url);  
      setData(res.data);
    } catch (err) {
     seterror(err);
    }
    setloading(false);
}
return {data,error,loading,refetch};
}
export default useFetch;