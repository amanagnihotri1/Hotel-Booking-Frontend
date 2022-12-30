import Home from "../src/pages/Home/Home";
import Hotel from "../src/pages/Hotel/Hotel";
import List from "../src/pages/list/List";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Signup } from "./components/signup/Signup";
import Login from "../src/pages/login/Login";
export default function App() 
{
  return (
     <BrowserRouter>
     <Routes> 
     <Route path="/" element={<Home/>}/> 
     <Route path="/hotel/:id" element={<Hotel/>}/> 
     <Route path="/list" element={<List/>}/> 
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/> 
     </Routes>
     </BrowserRouter>
    );
}
