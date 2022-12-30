import React from 'react'
import "./home.css";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
import Featuredproperty from '../../components/featuredProperty/Featuredproperty';
import Maillist from "../../components/mailList/Maillist";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div><Navbar/>
    <Header/>
    <div className="homeContainer">
    <Featured/> 
     <h1 className="homeTitle">Browse by property type</h1>
     { <PropertyList/> }
     <h1 className="fpTitle">Homes guests love</h1>
     { <Featuredproperty/> }
     <Maillist/>
     <Footer/>
    </div>
    </div>
  );
}
export default Home;
