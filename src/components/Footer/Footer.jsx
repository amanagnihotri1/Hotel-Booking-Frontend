import React from 'react'
import "../../components/Footer/footer.css";
const Footer = () => {
  return (
    <div className='footer'>
        <div className="fLists">
         <ul className='fList'>
         <li className='liststyle'>Countries</li>
         <li className='liststyle'>Regions</li>
         <li className='liststyle'>Cities</li>
         <li className='liststyle'>Districts</li>
         <li className='liststyle'>Airports</li>
          <li className='liststyle'>Hotels</li>
         </ul>   
         <ul className="fList">
         <li className='liststyle'>Homes</li>
         <li className='liststyle'>Apartments</li>
         <li className='liststyle'>Resorts</li>
         <li className='liststyle'>Villas</li>
         <li className='liststyle'>Hostels</li>
          <li className='liststyle'>Guest House</li>
         </ul>   
         <ul className="fList">
         <li className='liststyle'>Unique places to stay</li>
         <li className='liststyle'>Reviews</li>
         <li className='liststyle'>Unpacked:Travel Articles</li>
         <li className='liststyle'>Travel Communities</li>
         <li className='liststyle'>Seasonal and Holiday deals</li>
         </ul>   
         <ul className='fList'>
         <li className='liststyle'>Car rental</li>
         <li className='liststyle'>Flight Finder</li>
         <li className='liststyle'>Restaurant reserver</li>
         <li className='liststyle'>Travel Agents</li>
         </ul>   
         </div> 
         <div className="fText">Copyright © 2020 Lamdabooking.</div>  
    </div>
    );
};
export default Footer;
