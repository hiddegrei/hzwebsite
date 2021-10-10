import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import "../css/BlogPostPage.css"

function BlogPostPage() {
     const {blogname}=useParams();
     const [studiekeuze,setStudiekeuze]=useState(false)
     const [progervaring,setProgervaring]=useState(false)
     const [damen,setDamen]=useState(false)
     const [capgemini,setCapgemini]=useState(false)
     const [feedbackPitch,setFeedbackPitch]=useState(false)
     

     useEffect(()=>{
         
         if(blogname==='studiekeuze'){
             setStudiekeuze(true)
         }else if(blogname==='progervaring'){
             setProgervaring(true)
         }else if(blogname==='damennaval'){
             setDamen(true)
         }else if(blogname==='capgemini'){
             setCapgemini(true)
         }else if(blogname==='feedbackpitch'){
             setFeedbackPitch(true)
         }


     },[])
     console.log(studiekeuze)

    return (
        <div className="blogPostPage">

            {studiekeuze&&<article >
                <h3 >Studiekeuze</h3>
                <p >Voordat ik aan de studie ICT op de HZ begon studeerde ik Wiskunde in Utrecht, ik had toen voor de studie Wiskunde
                    gekozen omdat wiskundige problemen interessant vond en ook graag wilde leren programmeren. Deze studie bleek echter te lastig en te theoretisch,
                    daarom heb ik gekozen voor de wat voor praktische studie ICT op het Hbo.
                </p>
            </article>}

            {progervaring&&<article>
                <h3>programmering ervaring</h3>
                <p>
                    Ik ben na mijn mislukte studie Wiskunde begonnen met programmeren. Ik ben begonnen met het leren van javascript, ik heb nu denk ik zelf de basis technieken van javascript onder de knie waardoor
                    ik simpele games kan maken in javascript. Met die basis in javascript was het vrij gemakkelijk om over te stappen naar het maken van websites met React.
                    Ook in React heb ik nu de basis technieken redelijk onder de knie, waardoor ik een simpele werkende website kan maken.
                    Dit hele leer process vind ik erg leuk en daarom heb ik ook voor de ICT opleiding op de Hz gekozen om mijn programmeer skill set 
                    te vergroten.

                </p>
                </article>}

                {damen&&<article>
                <h3>Lezing Damen Naval</h3>
                <p>
                    Ik heb op 10 september 2021 de mogelijkheid gehad om een lezing bij te wonen van Daman Naval.
                    Dit was ontzettend interessant en ik kreeg al direct zin om stage te lopen bij Damen.
                    Er werd door de presentator van Damen, die werkt aan onder andere grote militaire schepen vertelt over hoe een schip nou eigenlijk gebouwd
                    word. Wat mij verbaasde was hoelang dat complete process duurt vanaf het ontwerpen van een boot totdat de boot klaar is voor gebruik.
                    Bij Damen gebruiken ze de nieuwste technieken, zoals virtual reality, om te bepalen waar precies de onderdelen van een boot moeten komen.
                    Het is namelijk zo dat de je maar één kans hebt om de boot op de juiste manier te maken, er moet dus ontzettend precies te werk worden gegaan bij de bouw van een boot.
                    En in dit precisie werk komt erg veel ICT kijken. Daarom lijkt het mij ook ontzettend leuk en interressant om stage te lopen bij Damen.
                    
                </p>
                </article>}

                {capgemini&&<article>
                <h3>capgemini</h3>
                <p>
                   Capgemini is een frans consultancybedrijf. 
                   Het geeft ICT gerelateerde adviezen aan andere bedrijven.
                   Capgemini is een wereldwijd bedrijf met 290.000 mensen verspreid door 50 landen. Het hoofdkantoor zit in Parijs.
                   Gapgemini loopt voorop op het gebied van innovatie, ze zijn eigenlijk van alle markten thuis.
                    Zo omvatten de technologische diensten van Capgemini: automatisering(artificial intelligence), 
                    infrastructuur, applicatieontwikkeling en ondehoud, testen en eindgebruikersdiensten.

                    Capgemini gebruikt verschillende programmeertalen, waardonder Java, c++ en python.
                   Mail naar stagebureau.nl@capgemini.com voor meer informatie voor een (afstudeer)stage.
                    




                </p>
                </article>}

                

                {feedbackPitch&&<article>
                <h2>Feedback pitch</h2>

                <h4>Compliments</h4>
                <p>
                 
                    




                </p>
                <h4>Improvements</h4>
                <p>
                 
                    




                </p>
                <h4>Code Review Feedback</h4>
                <p>
                 
                    




                </p>
                <h4>Tasks</h4>
                <p>
                 
                    




                </p>
                </article>}
            
        </div>
    )
}

export default BlogPostPage
