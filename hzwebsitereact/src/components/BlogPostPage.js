import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import "../css/BlogPostPage.css"

function BlogPostPage() {
     const {blogname}=useParams();
     const [studiekeuze,setStudiekeuze]=useState(false)
     const [progervaring,setProgervaring]=useState(false)

     useEffect(()=>{
         console.log(blogname)
         if(blogname==='studiekeuze'){
             setStudiekeuze(true)
         }else if(blogname==='progervaring'){
             setProgervaring(true)
         }


     },[])
     console.log(studiekeuze)

    return (
        <div className="blogPostPage">

            {studiekeuze?<div >
                <h3 >Studiekeuze</h3>
                <p >Voordat ik aan de studie ICT op de HZ begon studeerde ik Wiskunde in Utrecht, ik had toen voor de studie Wiskunde
                    gekozen omdat wiskundige problemen interessant vond en ook graag wilde leren programmeren. Deze studie bleek echter te lastig en te theoretisch,
                    daarom heb ik gekozen voor de wat voor praktische studie ICT op het Hbo.
                </p>

            </div>:
            <div></div>}
            
        </div>
    )
}

export default BlogPostPage
