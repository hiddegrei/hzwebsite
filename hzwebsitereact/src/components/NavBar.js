import React,{useState,useEffect} from 'react';
import "../css/NavBar.css";
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';



function NavBar({active}) {
    const [home,setHome]=useState(false);
    const [profile,setProfile]=useState(false);
    const [faq,setFaq]=useState(false);
    const [dashboard,setDashboard]=useState(false);
    const [blog,setBlog]=useState(false);
    const [dropDown,setDropDown]=useState(false)

    const [small,setSmall]=useState(false)

    var getUrl = window.location;

   const [size,setSize]=useState(window.innerWidth);
  
    const checkSize=()=>{
        setSize(window.innerWidth)
        
    }
    useEffect(()=>{
      if(size<600){
        setDropDown(false)
      }

    },[size])
    useEffect(()=>{
        window.addEventListener('resize',checkSize);
        return ()=>{
            window.removeEventListener('resize',checkSize)
        }
    })

     useEffect(()=>{
        setHome(false)
        setProfile(false)
        setFaq(false)
        setDashboard(false)
        setBlog(false)

        if(getUrl.pathname==='/'){setHome(true)}
   else if(getUrl.pathname==='/profile'){setProfile(true)}
   else if(getUrl.pathname==='/faq'){setFaq(true)}
   else if(getUrl.pathname==='/dashboard'){setDashboard(true)}
   else if(getUrl.pathname==='/blog'){setBlog(true)}
   

    },[getUrl.pathname])

    return (
        <div className="navbar">
          {/* Ik moet de Link component gebruiken inplaats van a tag omdat anders de app refreshed en dan ben ik de user kwijt. En het is smoother zo. */}

             <nav className="nav">
          <Link to={{ pathname: "https://hz.nl" }}  target="_blank">
              
          <img alt="" className="nav__button "  src="https://hz.nl/assets/svg/hz-logo.svg"></img>
          
        </Link>
        <Link className={home?`nav__button active`:"nav__button"} to="/">Home</Link>
        <Link to="/profile" class={profile?`nav__button active`:"nav__button"}>Profile</Link>
        <Link className={dashboard?`nav__button active`:"nav__button"} to="/dashboard">Dashboard</Link>
        <Link className={faq?`nav__button active`:"nav__button"} to="/faq">FAQ</Link>
        <Link className={blog?`nav__button active`:"nav__button"} to="/blog">Blog</Link>
        {size<600&&<MenuIcon onClick={()=>{setDropDown(!dropDown)}}  className="nav__menu" />}

        {dropDown&&<div className="nav__dropDown">
          
           <Link onClick={()=>setDropDown(false)} className={home?`nav__button2 active`:"nav__button2"} to="/">Home</Link>
        <Link  onClick={()=>setDropDown(false)} to="/profile" class={profile?`nav__button2 active`:"nav__button2"}>Profile</Link>
        <Link  onClick={()=>setDropDown(false)} className={dashboard?`nav__button2 active`:"nav__button2"} to="/dashboard">Dashboard</Link>
        <Link  onClick={()=>setDropDown(false)} className={faq?`nav__button2 active`:"nav__button2"} to="/faq">FAQ</Link>
        <Link  onClick={()=>setDropDown(false)} className={blog?`nav__button2 active`:"nav__button2"} to="/blog">Blog</Link>
          </div>}

      </nav>
            
        </div>
    )
}

export default NavBar
