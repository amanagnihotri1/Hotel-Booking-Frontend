import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "../propertyList/propertyList.css"; 
const PropertyList = () => {
const{data,loading,error}=useFetch("/hotels/countByType");
console.log(data);
const s=Object.keys(data);
const sval=Object.values(data);  
const images=[
  "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
  "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
]; 
  return (
    <div className="pList">   
    {loading?("loading"):(
     <>
      { data && images.map((img,i)=>(
      <div className="pListItem" key={i}>
     <img src={img} alt="Image not loading"/>
     <h2>{data?s[i]:"NULL"}</h2>
     <h4>{data?sval[i]:"NULL"}</h4>
    </div>  
      ))}
     </>
    )}
    </div>
  )
}
export default PropertyList;