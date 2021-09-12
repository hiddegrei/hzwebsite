import React,{useState,useEffect} from 'react';
import "../css/NavBar.css";
import {Link} from "react-router-dom";


function NavBar({active}) {
    const [home,setHome]=useState(false);
    const [profile,setProfile]=useState(false);
    const [faq,setFaq]=useState(false);
    const [dashboard,setDashboard]=useState(false);
    const [blog,setBlog]=useState(false)

    var getUrl = window.location;

     useEffect(()=>{
        

        if(getUrl.pathname==='/'){setHome(true)}
   else if(getUrl.pathname==='/profile'){setProfile(true)}
   else if(getUrl.pathname==='/faq'){setFaq(true)}
   else if(getUrl.pathname==='/dashboard'){setDashboard(true)}
   else if(getUrl.pathname==='/blog'){setBlog(true)}
   

    },[getUrl.pathname])

    return (
        <div className="navbar">

             <nav className="nav">
          <Link to={{ pathname: "https://hz.nl" }}  target="_blank">
              
          <img alt="" className="nav__button "  src="https://hz.nl/assets/svg/hz-logo.svg"></img>
        </Link>
        <a className={home?`nav__button active`:"nav__button"} href="/">Home</a>
        <a href="/profile" class={profile?`nav__button active`:"nav__button"}>Profile</a>
        <a className={dashboard?`nav__button active`:"nav__button"} href="/dashboard">Dashboard</a>
        <a className={faq?`nav__button active`:"nav__button"} href="/faq">FAQ</a>
        <a className={blog?`nav__button active`:"nav__button"} href="/blog">Blog</a>
      </nav>
            
        </div>
    )
}

export default NavBar
