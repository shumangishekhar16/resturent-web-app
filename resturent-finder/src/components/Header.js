
import logo from "./loho2.svg"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";  

const Header=()=>{
    const[login,setLogin]=useState("Login")

    useEffect(()=>{},[])
    return (
        <div className="header">
            <div className="logo">

                <img src={logo} alt="logo"/>  
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contectus">Contect Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        login==="Login"?setLogin("Logout"):setLogin("Login");  

                    }}>{login}</button>
                </ul> 
            </div>

            
        </div>
    )
}

export default Header;