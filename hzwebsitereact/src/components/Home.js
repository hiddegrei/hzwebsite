import React from 'react';
import "../css/Home.css";
import socialhit from "../images/shortlogoSocialHit2.jpg";
import datapic from "../images/da.jpg"
import itpic from "../images/it.jpg"
import sepic from "../images/se.jpg"

function Home() {
    return (
        <div className="home">

            <p className="home__p">
                <h3 style={{display:'flex'}}>Intro</h3>
                
                Ik ben 1.5 jaar geleden begonnen met programmeren. 
            Ik heb via Youtube de basis principes geleerd van Javascript, door simpele games te maken, zoals flappy-bird, kreeg ik javascript aardig onder de knie
              . Ik merkte al snel dat het erg leuk en interessant was om continu nieuwe dingen te leren waardoor je je projecten kan verbeteren. 
              Vorig jaar heb ik Wiskunde gestudeerd in Utrecht, waar ik vakken heb gevolgd die gingen over lineaire algebra, bijvoorbeeld matrix vermenigvuldiging. 
              Door deze kennis kon begrijpen hoe een simpel genetische algoritme werkt, dit heb ik dan ook toegepast om de computer de leren om flappy-bird te spelen.
              
              Ik kwam toen React tegen op het internet, een library waarmee je gemakkelijk javascript en Html code samen kunt gebruiken. Toen vond ik het een leuk idee
              om een simpel social media website te maken met React. Ik weet nog niet veel van backend code dus dat liet ik over aan firebase. Doordat ik tegen problemen aanliep
              wanneer ik nieuwe dingen aan mijn website wilde toevoegen werd ik gedwongen het zelf uit te zoeken via het internet. 

              Het resultaat van dit leerprocess is nu te zien op socialhit.nl

              Ik vind dit leer process erg leuk
              en dat is ook waarom ik denk ik bij de HZ ICT opleiding op de goeie plek.
            </p>
            <h3 style={{display:'flex'}}>Na de studie</h3>
            <div className="home__ictStromingen">
                <a target="_blank" href="https://hz.nl/opleidingen/hbo-ict/studieroutes/business-it-consultant-bic"><img alt="" src={itpic} className="home__ictStromingen__pic" ></img></a>
                <a target="_blank" href="https://hz.nl/opleidingen/hbo-ict/studieroutes/data-scientist-ds"><img alt="" src={datapic} className="home__ictStromingen__pic"></img></a>
                <a target="_blank" href="https://hz.nl/opleidingen/hbo-ict/studieroutes/software-engineer-se"><img alt="" src={sepic} className="home__ictStromingen__pic"></img></a>

            </div>
            <p className="home__p">
                Op de opleiding ICT op de hz onderscheiden we 3 stromingen

                <ul>
                    <li>Business IT Consultant</li>
                    <li>Data Scientist</li>
                       <li>Software Engineer</li>

                </ul>

                </p>

            <p className="home__p">
                Omdat ik nog maar vrij recent begonnnen ben met programmeren en ik nog niet heel veel gezien heb is het moeilijk om te zeggen wat voor baan 
                ik later leuk ga vinden. Op dit moment denk ik wel dat ik werk als data scientist of back end developer, en het de echte technishe dingen in het programmeren het leukst vind.
                Dus ik denk dat ik studieroute Data Scientist of Sofware Engineer ga volgen. Deze keuze moet ik voor het 3e jaar gemaakt hebben dus als ik later over meer kennis beschik denk ik er misschien anders over.

            </p>

            <p className="home__p">
               <h3 style={{display:'flex'}}>Projecten</h3>
               <div style={{display:'flex'}}>
               <a target="_blank" href="https://socialhit.nl">
               <img style={{display:'flex',width:'50px',height:'auto'}} alt="socialhit.nl" src={socialhit} ></img>
               </a>
               </div>
            </p>




            
        </div>
    )
}

export default Home
