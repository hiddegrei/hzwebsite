import React from 'react';
import "../css/Profile.css";
import bikefoto from "../images/imagebike.jpg"
import dishoekFoto from "../images/dishoekvuurtoren.jpg"

function Profile() {
    return (
        <div className="profile">

           
          {/* <img alt=""  class="profile__inhoud__img" src={bikefoto}></img> */}

          <div class="profile__inhoud">
              <h2  style={{display:'flex'}}>Wie ben ik?</h2>
              <article>
              <p style={{display:'flex',marginTop:"10px"}}>
                  Ik ben Hidde Greijdanus, 19 jaar. Ik ben geslaagd voor het VWO, richting natuur en techniek.
                  En vorig jaar heb ik wiskunde gestudeerd in Utrecht.

              
              </p>
              </article>

              <h2  style={{display:'flex'}}>Hobbies</h2>
               <article >
              
              <p style={{display:'flex'}}>
                  In mijn vrije tijd doe ik aan wielrennen,hardlopen en zwemmen. Fietsen doe ik door heel zeeland en soms een tochtje door België of door de Utrechtse heuvelrug.
                  Hardlopen doe ik over het strand en over de duinen rond Dishoek. En het zwemmen vind plaats in het vrijburgbad in Vlissingen.
                  <img alt=""  class="profile__inhoud__img" src={bikefoto}></img>

              </p>
              </article>

              <h2  style={{display:'flex'}}>Werk</h2>
              <article>
              <p>
                  Ik werk bij c-port in de haven, de werkzaamheden zijn bij Kloosterboer.
              </p>
              </article>

              <h2  style={{display:'flex'}}>Woonplaats</h2>
              <article>
              <p>
                  Ik woon in Dishoek in de buurt van Koudekerke.
              </p>
              <img alt=""  class="profile__inhoud__img" src={dishoekFoto}></img>
              </article>
              

          </div>
      
            
        </div>
    )
}

export default Profile
