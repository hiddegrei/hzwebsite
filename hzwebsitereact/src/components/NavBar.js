import React,{useState,useEffect} from 'react';
import "../css/NavBar.css";


function NavBar({active}) {
    const [home,setHome]=useState(false);
    const [profile,setProfile]=useState(false);
    const [faq,setFaq]=useState(false);
    const [dashboard,setDashboard]=useState(false);
    const [blog,setBlog]=useState(false)

    var getUrl = window.location;

     useEffect(()=>{
        

        if(getUrl.pathname==='/'){
      setHome(true)
   }else if(getUrl.pathname==='/profile'){setProfile(true)}
   else if(getUrl.pathname==='/faq'){setFaq(true)}
   else if(getUrl.pathname==='/dashboard'){setDashboard(true)}
   else if(getUrl.pathname==='/blog'){setBlog(true)}
   

    },[getUrl.pathname])

    return (
        <div className="navbar">

             <nav class="nav">
          
          <img alt="" class="nav__button " href="https://learn.hz.nl" src="https://hz.nl/assets/svg/hz-logo.svg"></img>
        <a class={home?`nav__button active`:"nav__button"} href="/">Home</a>
        <a href="/profile" class={profile?`nav__button active`:"nav__button"}>Profile</a>
        <a class={dashboard?`nav__button active`:"nav__button"} href="/dashboard">Dashboard</a>
        <a class={faq?`nav__button active`:"nav__button"} href="/faq">FAQ</a>
        <a class={blog?`nav__button active`:"nav__button"} href="/blog">Blog</a>
      </nav>
            
        </div>
    )
}

export default NavBar
